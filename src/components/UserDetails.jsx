import { ImageIcon, CameraIcon, VideoIcon, MoreHorizontalIcon, BookmarkIcon, TagIcon, ClockIcon, LockKeyholeIcon, ShieldQuestionIcon, XCircleIcon } from "lucide-react";

export default function UserDetails() {
    return (
        <div className="w-80 h-full border-l flex flex-col  dark:border-gray-700">
            <div className="flex-1 overflow-auto gap-4 flex flex-col p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img src="https://avatar.iran.liara.run/username?username=mohamde+ben" alt="User Image" className="w-16 h-16 rounded-full" />
                    <h3 className="font-semibold dark:text-gray-100 text-xl">Mohamde Ben</h3>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">A simple chat app built with React</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <ImageIcon className="w-5 h-5" />
                        <p>View media and files</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <CameraIcon className="w-5 h-5" />
                        <p>Take a photo</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <VideoIcon className="w-5 h-5" />
                        <p>Start a video call</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <MoreHorizontalIcon className="w-5 h-5" />
                        <p>More options</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <BookmarkIcon className="w-5 h-5" />
                        <p>Save message</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <TagIcon className="w-5 h-5" />
                        <p>Add a label</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <ClockIcon className="w-5 h-5" />
                        <p>Save conversation</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <LockKeyholeIcon className="w-5 h-5" />
                        <p>Privacy and support</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <ShieldQuestionIcon className="w-5 h-5" />
                        <p>Help and feedback</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:text-gray-200">
                        <XCircleIcon className="w-5 h-5" />
                        <p>Block and report</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

