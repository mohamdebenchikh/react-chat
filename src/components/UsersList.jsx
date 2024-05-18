import UserInfo from "./UserInfo";
import { Ellipsis, EditIcon, SearchIcon, LogOutIcon } from "lucide-react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useAuth } from "../store";

export default function UsersList() {
    const users = [
        { name: "Jone Doe", time: "2h ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=jone+doe", online: true, read: true },
        { name: "Alice Johnson", time: "1h ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=alice+johnson", online: false, read: false },
        { name: "Bob Smith", time: "30m ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=bob+smith", online: true, read: true },
        { name: "Mary Taylor", time: "15m ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=mary+taylor", online: false, read: false },
        { name: "David Davis", time: "2h ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=david+davis", online: true, read: true },
        { name: "Sarah Lee", time: "1h ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=sarah+lee", online: false, read: false },
        { name: "Tom Brown", time: "30m ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=tom+brown", online: true, read: true },
        { name: "Mark Williams", time: "15m ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=mark+williams", online: false, read: false },
        { name: "Emma Taylor", time: "2h ago", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", image: "https://avatar.iran.liara.run/username?username=emma+taylor", online: true, read: false },
    ]

    const { logout, user } = useAuth();


    return (
        <div className="w-80 border-r flex flex-col dark:border-gray-700 h-full">
            <div className="h-16 border-b dark:border-gray-700 flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <img src={'https://avatar.iran.liara.run/username?username=' + user?.username} alt="user image" className="w-8 h-8 rounded-full" />

                    <h4 className="font-semibold dark:text-gray-100">{user?.username}</h4>
                </div>
                <div className="flex items-center gap-4">

                    <Menu as={'div'} className={"relative flex items-center"}>
                        <MenuButton className="dark:text-gray-200">
                            <Ellipsis className="w-5 h-5" />
                        </MenuButton>
                        <MenuItems as="ul" className={"absolute top-6 min-w-[160px] shadow-md border dark:border-gray-700 dark:bg-gray-800 rounded"}>
                            <MenuItem as={'button'} onClick={() => logout()} className={"dark:text-gray-400 w-full px-3 py-1.5 dark:hover:bg-gray-700 dark:hover:text-gray-200 flex items-center gap-2"}>
                                <LogOutIcon className="w-4 h-4" /> Log out
                            </MenuItem>
                        </MenuItems>
                    </Menu>


                    <button className="dark:text-gray-200">
                        <EditIcon className="w-5 h-5" />
                    </button>

                </div>
            </div>
            <div className="flex-1 flex flex-col divide-y dark:divide-gray-700 overflow-y-auto">
                <div className="p-4">
                    <div className="flex items-center rounded-full shadow-sm dark:bg-gray-800 px-3 py-2">
                        <SearchIcon className="w-5 h-5 dark:text-gray-400" />
                        <input type="text" placeholder="Search for..." className="bg-transparent w-full dark:text-gray-200 outline-none ml-2 flex-1" />
                    </div>
                </div>
                {users.map((user, i) => <UserInfo key={i} {...user} />)}
            </div>
        </div>
    )
}
