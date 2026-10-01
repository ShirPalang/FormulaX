import { RiHeartFill, RiTimeLine } from "react-icons/ri"

const CalcFlowCard = () => {
  return (
    <div className="shrink-0 w-55 md:w-65 h-75 md:h-90 snap-start cursor-pointer group/card">
      <div className="relative h-full bg-linear-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-2xl overflow-hidden shadow-lg group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-[1.02]">

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/20" />

        <div className="relative z-10 p-4 md:p-5 h-full flex flex-col">

          <div className="flex items-center gap-2">
            <img
              src="/src/assets/react.svg"
              alt=""
              className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover ring-1 ring-white/40"
            />

            <span className="text-white font-semibold text-xs md:text-sm truncate">
              ShirPalang
            </span>
          </div>

          <div className="text-center my-auto">
            <div className="font-mono text-sm md:text-base text-white/90 mb-2">
              2+2
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-white/40" />
              <span className="text-white/90 text-lg md:text-xl font-bold">
                =
              </span>
              <span className="w-4 h-px bg-white/40" />
            </div>

            <div className="font-mono text-xl md:text-2xl font-bold text-white">
              4
            </div>
          </div>

          <div className="flex items-center justify-between text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <RiHeartFill className="text-red-400" />
              234
            </span>

            <div className="flex items-center gap-1 text-white/60 text-xs">
              <RiTimeLine />
              2h ago
            </div>
          </div>
          <div className="relative z-10 pb-3 flex flex-wrap gap-1 mt-5">
            <span className="text-white/70 text-xs bg-white/10 px-2 py-0.5 rounded-full">#ben10</span>
            <span className="text-white/70 text-xs bg-white/10 px-2 py-0.5 rounded-full">#ben10</span>
            <span className="text-white/50 text-xs">+1</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CalcFlowCard