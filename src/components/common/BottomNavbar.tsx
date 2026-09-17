import { RiCalculatorLine, RiHomeLine, RiMovie2Line, RiMovieLine, RiUser3Line } from "react-icons/ri"
import { NavLink } from "react-router"

const BottomNavbar = () => {

  const activeLink = (isActive: Boolean) => {
    return isActive ? "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-violet-600"
      : "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 cursor-pointer relative text-white"
  }

  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-40 transition-colors duration-300'>
      <div className="flex items-center justify-around h-14">

        <NavLink className={({ isActive }) => activeLink(isActive)}
          to="/" data-discover="true">
          <div className="relative">
            <RiCalculatorLine className="text-2xl" />
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => activeLink(isActive)}
          to="/feed" data-discover="true">
          <div className="relative">
            <RiHomeLine className="text-2xl" />
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => activeLink(isActive)}
          to="/calcflow" data-discover="true">
          <div className="relative">
            <RiMovie2Line className="text-2xl" />
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => activeLink(isActive)}
          to="/stories" data-discover="true">
          <div className="relative">
            <RiMovieLine className="text-2xl" />
          </div>
        </NavLink>

        <NavLink className={({ isActive }) => activeLink(isActive)}
          to="/profile" data-discover="true">
          <div className="relative">
            <RiUser3Line className="text-2xl" />
          </div>
        </NavLink>

      </div>
    </nav>
  )
}

export default BottomNavbar