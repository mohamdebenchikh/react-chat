import { create } from "zustand";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from "./firebase";
import {signOut} from 'firebase/auth';

export const useAuth = create((set) => ({
  user: null,
  isLoading: false,
  fetchUser: async (uid) => {
    set({ isLoading: true });
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
      return set({ user: null, isLoading: false });
    }
  },
  logout: () => signOut(auth).then(() => set({ user: null })),
}));
