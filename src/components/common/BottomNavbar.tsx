import { RiCalculatorLine, RiHomeLine, RiMovie2Line, RiMovieLine, RiUser3Line } from "react-icons/ri"

const BottomNavbar = () => {
  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-40 transition-colors duration-300'>
      <div className="flex items-center justify-around h-14">

        <a className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-violet-600"
          href="#" data-discover="true">
          <div className="relative">
            <RiCalculatorLine className="text-2xl" />
          </div>
        </a>

        <a className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-white"
          href="#" data-discover="true">
          <div className="relative">
            <RiHomeLine className="text-2xl" />
          </div>
        </a>

        <a className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-white"
          href="#" data-discover="true">
          <div className="relative">
            <RiMovie2Line className="text-2xl" />
          </div>
        </a>

        <a className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-white"
          href="#" data-discover="true">
          <div className="relative">
            <RiMovieLine className="text-2xl" />
          </div>
        </a>

        <a className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-white"
          href="#" data-discover="true">
          <div className="relative">
            <RiUser3Line className="text-2xl" />
          </div>
        </a>

      </div>
    </nav>
  )
}

export default BottomNavbar