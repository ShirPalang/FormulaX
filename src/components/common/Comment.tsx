import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri"
import { Link } from "react-router"

const Comment = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4 transition-colors duration-300">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
            <Link to='/user' className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm hover:text-violet-600 hover:underline cursor-pointer">
              NumberNinja
            </Link>
            <span className='class="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs'> . 1h ago</span>
          </div>
          <p className="mt-1 text-gray-800 dark:text-gray-200 text-sm md:text-sm font-mono break-all">
            2+2 = 4
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button className="flex items-center gap-0.5 md:gap-1 text-gray-600 dark:text-gray-400 hover:text-violet-600 transition-colors duration-200 cursor-pointer">
            <RiArrowUpLine />
            <span className="text-[10px] md:text-xs font-semibold">12</span>
          </button>
          <button className="flex items-center gap-0.5 md:gap-1 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer">
            <RiArrowDownLine />
            <span className="text-[10px] md:text-xs font-semibold">12</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment