import Hammer from "hammerjs"
import { useEffect, useRef } from "react"


type StoryModalProps = {
  dragY: number
  setDragY: (position: number) => void
  showStoryModal: boolean
  setShowStoryModal: (status: boolean) => void

}

const StoryModal = ({ dragY, setDragY, showStoryModal, setShowStoryModal }: StoryModalProps) => {

  const storyRef = useRef<HTMLDivElement>(null)


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
  )
}

export default StoryModal