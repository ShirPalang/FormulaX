import { RiArrowRightLine, RiMovie2Line } from "react-icons/ri"
import { Link } from "react-router"
import CalcFlowCard from "./CalcFlowCard"

const CalcFlowCarousel = () => {
  return (
    <div className="mb-4 md:mb-6">

      {/* header section */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
            <RiMovie2Line className="text-white text-sm md:text-base" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">CalcFlow</h3>
        </div>

        <Link to='/calcflow' className="text-violet-600 hover:text-violet-700 font-semibold text-xs md:text-sm flex items-center gap-1 cursor-pointer whitespace-nowrap">
          View all
          <RiArrowRightLine />
        </Link>
      </div>

      {/* main section */}
      <div className="relative group">
        {/* buttons */}
        {/* / */}
        {/* / */}
        {/* / */}

        {/* reels */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          <CalcFlowCard/>
          <CalcFlowCard/>
          <CalcFlowCard/>
          <CalcFlowCard/>
          <CalcFlowCard/>
        </div>
      </div>
    </div>
  )
}

export default CalcFlowCarousel