import { useState } from "react"
import { RiAddLine } from "react-icons/ri"
import StoryModal from "./StoryModal"

type StoryStatus = {
  status: "loading" | "add" | "Ready"
}
const Story = ({ status }: StoryStatus) => {

  const [showStoryModal, setShowStoryModal] = useState<boolean>(false)
  const [dragY, setDragY] = useState(0)

  const openStory = () => {
    setDragY(0)
    setShowStoryModal(true)
  }

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

      <StoryModal dragY={dragY} setDragY={setDragY} showStoryModal={showStoryModal} setShowStoryModal={setShowStoryModal} />
    </>
  )
}

export default Story