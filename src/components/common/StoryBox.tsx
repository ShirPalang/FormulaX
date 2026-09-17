import Story from "./Story"

const StoryBox = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 mb-4 md:mb-6 p-3 md:p-4 transition-colors duration-300">
      <div className="flex gap-2.5 md:gap-4 overflow-x-auto pb-1 md:pb-2 items-start scrollbar-none">
        <Story status="add" />
        <Story status="loading" />
        <Story status="Ready" />
        <Story status="Ready" />
        <Story status="Ready" />
        <Story status="Ready" />
        <Story status="Ready" />
        <Story status="Ready" />
        <Story status="Ready" />
      </div>
    </div>

  )
}

export default StoryBox