import { RiNotification3Line, RiSunLine } from "react-icons/ri"

const TopNavbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          <a className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0" href="#" data-discover="true">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-violet-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-xl">X</span>
            </div>
            <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">Formula<span className="text-violet-600">X</span></span></a>

          <div className="flex md:hidden items-center gap-1">
            <a href="#"
            className="relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">

              <RiNotification3Line className="text-xl"/>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">3</span>
            </a>

            <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <RiSunLine className="text-xl"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar