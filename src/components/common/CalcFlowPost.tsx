import { useEffect, useRef, useState } from "react"
import { RiChat3Line, RiHeartFill, RiHeartLine, RiRepeat2Line, RiShareForwardLine } from "react-icons/ri"
import { Link } from "react-router"

const CalcFlowPost = () => {

  const [likeAnimation, setLikeAnimation] = useState(false)

  const lastTap = useRef(0)

  const doubleClickLike = () => {
    setLikeAnimation(true)

    setTimeout(() => {
      setLikeAnimation(false)
    }, 800);
  }

  const doubleTapLike = () => {
    const now = Date.now()

    if (now - lastTap.current < 300) {
      doubleClickLike()
    }

    lastTap.current = now
  }



  return (
    <>
      <div className="snap-start h-[calc(100vh-57px)] md:h-[calc(100vh-80px)] w-full flex items-center justify-center relative select-none"
        onDoubleClick={doubleClickLike}
        onPointerUp={doubleTapLike}>
        <div className="absolute inset-0 bg-linear-to-br from-violet-900 via-purple-900 to-fuchsia-900">
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 md:px-12 pb-32 md:pb-40 pt-16 md:pt-20">
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 cursor-pointer">


            <Link to='/' className="flex items-center gap-3 mb-6 cursor-pointer group">
              <div className="relative">
                <img src="/src/assets/react.svg" alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-white/30" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold text-sm md:text-base group-hover:underline">MathGenius42</span>
                </div>
                <span className="text-white/50 text-xs">2h ago</span>
              </div>
            </Link>

            <div className="text-center">
              <div className="font-mono text-xl md:text-3xl text-white/90 mb-3 break-all leading-relaxed">(15 × 8) + 42</div>

              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-8 h-0.5 bg-violet-400/60 rounded-full"></span>
                <span className="text-violet-300 text-3xl md:text-4xl font-bold">=</span>
                <span className="w-8 h-0.5 bg-violet-400/60 rounded-full"></span>
              </div>

              <div className="font-mono text-3xl md:text-5xl font-bold text-white mb-4 break-all">162</div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">

              <Link to='/' className="text-violet-300 hover:text-white text-xs md:text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors cursor-pointer">
                #ben10
              </Link>
              <Link to='/' className="text-violet-300 hover:text-white text-xs md:text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors cursor-pointer">
                #ben10
              </Link>
              <Link to='/' className="text-violet-300 hover:text-white text-xs md:text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors cursor-pointer">
                #ben10
              </Link>

            </div>

          </div>
        </div>

        <div className="absolute right-3 md:right-6 bottom-32 md:bottom-40 flex flex-col items-center gap-5 md:gap-6 z-20">

          <button className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-white/5 text-white hover:bg-white/20">
              <RiHeartLine className="text-xl mf:text-2xl" />
            </div>

            <span className="text-white text-xs font-semibold">234</span>
          </button>

          <button className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-white/5 text-white hover:bg-white/20">
              <RiRepeat2Line className="text-xl mf:text-2xl" />
            </div>

            <span className="text-white text-xs font-semibold">234</span>
          </button>

          <button className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-white/5 text-white hover:bg-white/20">
              <RiShareForwardLine className="text-xl mf:text-2xl" />
            </div>

            <span className="text-white text-xs font-semibold">234</span>
          </button>

        </div>

        {/* like */}
        <div className={`absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center ${likeAnimation ? 'visible' : 'hidden'}`}>
          <RiHeartFill className="text-red-500 text-[150px] md:text-[200px] animate-ping" />
        </div>
      </div>
    </>
  )
}

export default CalcFlowPost