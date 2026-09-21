import Hammer from "hammerjs"
import { useEffect, useRef, useState } from "react"
import { RiAddLine } from "react-icons/ri"

type StoryStatus = {
  status: "loading" | "add" | "Ready"
}
const Story = ({ status }: StoryStatus) => {

  const [showStoryModal, setShowStoryModal] = useState<boolean>(false)
  const [dragY, setDragY] = useState(0)

  const storyRef = useRef<HTMLDivElement>(null)

  const openStory = ()=> {
    setDragY(0)
    setShowStoryModal(true)
  }

  useEffect(() => {
    if (!storyRef.current) return

    const manager = new Hammer(storyRef.current)

    manager.get("pan").set({
      direction: Hammer.DIRECTION_VERTICAL,
    })

    manager.on("pan", (event) => {
      if (event.deltaY > 0) {
        setDragY(event.deltaY)
      }
    })

    manager.on("panend", (event) => {
      if (event.deltaY > 300) {
        setShowStoryModal(false)
      } else {
        setDragY(0)
      }
    })

    return () => {
      manager.destroy()
    }
  }, [])

  return (
    <>
      <div
        className={`relative shrink-0 w-24 h-35 bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl 
    overflow-hidden shadow-lg ring-2 ring-gray-300 dark:ring-gray-600 ${status === 'loading' && ''}`}
        onClick={openStory}>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-1.5 md:p-2 bg-black/10">
          {status === "add" && (
            <RiAddLine className="text-2xl md:text-3xl text-white" />
          )}

          {status === "loading" && (
            <>
              <div className="bg-white opacity-35 w-full h-5 rounded-md animate-pulse" />

              <div className="bg-white opacity-35 w-full h-5 rounded-md animate-pulse my-1.5" />

              <div className="bg-white opacity-35 w-full h-5 rounded-md animate-pulse" />
            </>
          )}

          {status === "Ready" && (
            <>
              <div className="text-white font-mono text-xs text-center break-all">
                365 + 12
              </div>

              <div className="text-white text-base md:text-md font-bold mt-0.5">
                =
              </div>

              <div className="text-white font-mono text-xs font-bold text-center break-all">
                52.14
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-1.5 md:p-2">
          <p className="text-white text-[9px] md:text-[10px] font-semibold text-center whitespace-nowrap">
            {
              status === 'add' && 'Create Story'
            }
            {
              status === 'Ready' && 'abbas'
            }
          </p>
        </div>

      </div>


      {/* story */}

      <div className={`fixed inset-0 z-50 w-full h-full transition-transform duration-300 ease-out flex justify-center items-center
                ${showStoryModal ? "translate-y-0" : "translate-y-full"}`}
        ref={storyRef}
        style={{
          transform: `translateY(${dragY}px)`,
        }}
      >
        <div className='px-8 py-12 w-full h-full bg-linear-to-br from-violet-600 to-fuchsia-600 absolute left-0 top-0 md:h-[90vh] md:w-md md:relative md:rounded-4xl'>
          {/* story header */}
          <div>

            {/* story line */}
            <div className="flex gap-2">
              <div className="bg-white h-1 w-full rounded-full" />
              <div className="bg-white h-1 w-full rounded-full opacity-50" />
              <div className="bg-white h-1 w-full rounded-full opacity-50" />
            </div>

            {/* user and story data */}
            <div className="z-10 flex items-center my-5">
              <div className="flex items-center gap-2.5 md:gap-3">
                <img src="/src/assets/react.svg" alt="" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-white" />
                <div>
                  <p className="text-white font-semibold flex items-center gap-1.5">MathGenius42</p>
                  <p className="text-white/70 text-xs">1h ago</p>
                </div>
              </div>
            </div>

          </div>

          {/* story content */}
          <div className="h-[calc(100%-112px)] flex justify-center items-center">
            <p className="text-5xl text-white">2+2 = 14</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Story