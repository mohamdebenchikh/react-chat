import { create } from "zustand";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const useAuth = create((set) => ({
    user: null,
    isAuth: false,
    isLoading: false,
    error: null,

    fetchUser: async (uid) => {
        set({ isLoading: true, error: null });
        try {
            if (!uid) return set({ user: null, isLoading: false });

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                set({ user: docSnap.data(), isLoading: false });
            } else {
                set({ user: null, isLoading: false });
            }
        } catch (error) {
            console.log(error);
            set({ user: null, isLoading: false, error: error.message });
        }
    },

    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential.user) {
                set({ user: userCredential.user, isAuth: true, isLoading: false });
            }
        } catch (error) {
            set({ user: null, isAuth: false, isLoading: false, error: error.message });
        }
    },

    register: async (username, email, password) => {
        set({ isLoading: true, error: null });
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    username,
                    email,
                    userId: user.uid,
                    blocked: [],
                });
                await setDoc(doc(db, "userChats", user.uid), {
                    chats: [],
                });
                await updateProfile(auth.currentUser, {
                    displayName: username,
                });
                set({ user, isAuth: true, isLoading: false });
            }
        } catch (error) {
            set({ user: null, isAuth: false, isLoading: false, error: error.message });
        }
    },

    logout: async () => {
        await signOut(auth);
        set({ user: null, isAuth: false, error: null });
    },

    setError: (error) => {
        set({ error });
    },
    subscribe: (set) =>
        onAuthStateChanged(auth, (user) =>
            set({ user, isAuth: !!user, error: null })
        ),
}));

export default useAuth;

