
import { Ellipsis, VideoIcon, SendHorizonal, InfoIcon, ImageIcon, MicIcon, CameraIcon, SmileIcon } from "lucide-react";


export default function ChatBox() {
    return (
        <div className="flex-1 flex flex-col justify-between">

            <div className="h-16 border-b dark:border-gray-700 flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <img src="https://avatar.iran.liara.run/username?username=mohamde+ben" className="w-10 h-10 rounded-full" alt="user name" />
                    <div className="leading-4">
                        <h4 className="font-semibold dark:text-gray-100">Mohamde Ben</h4>
                        <small className="text-xs dark:text-gray-400">Online</small>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="dark:text-gray-200">
                        <Ellipsis className="w-5 h-5" />
                    </button>
                    <button className="dark:text-gray-200">
                        <VideoIcon className="w-5 h-5" />
                    </button>
                    <button className="dark:text-gray-200">
                        <InfoIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex-1">

            </div>
            <div className="h-16 p-4 flex items-center gap-4 border-t dark:border-gray-700">
                <button>
                    <ImageIcon className="w-5 h-5 dark:text-gray-400" />
                </button>
                <button>
                    <CameraIcon className="w-5 h-5 dark:text-gray-400" />
                </button>
                <button>
                    <MicIcon className="w-5 h-5 dark:text-gray-400" />
                </button>
                <div className="flex items-center flex-1 dark:bg-gray-800 rounded-full gap-2 px-4 p-2">
                    <button>
                        <SmileIcon className="h-5 w-5 dark:text-gray-400" />
                    </button>
                    <input className="border-none flex-1 outline-none bg-transparent dark:text-gray-200" placeholder="Type a message" />

                    <button>
                        <SendHorizonal className="h-5 w-5 dark:text-indigo-500" />
                    </button>
                </div>
            </div>
        </div>
    )
}