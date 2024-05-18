export default function UserInfo({name, time, message, image, online, read}) {
    return (
        <div className={`flex items-center gap-4 p-4 dark:hover:bg-gray-800 cursor-pointer `}>
        <div className="relative">
            <img src={image} alt="user image"  className="w-10 h-10 rounded-full" />
            {online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></span>}
        </div>
        <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-between">
            <h4 className="dark:text-gray-100 font-semibold">{name}</h4>
            <p className="dark:text-gray-400 text-xs">{time}</p>
            </div>
            <p className={` text-sm text-ellipsis overflow-hidden text-nowrap ${read ? "dark:text-gray-400" : "dark:text-gray-100"}`}>{message}</p>
        </div>
    </div>
    )
}


