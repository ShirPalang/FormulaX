import { RiCompass3Line, RiUserHeartLine } from "react-icons/ri"
import StoryBox from "../components/common/StoryBox"
import Post from "../components/common/Post"
import PostButton from "../components/common/PostButton"
import CalcFlowCarousel from "../components/common/CalcFlowCarousel"

const Feed = () => {
  return (
    // GoContainer
    <div className='container mx-auto px-4 py-4 md:py-8 max-w-3xl pb-20 md:pb-24'>
      {/* switch feed too explore */}
      <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 mb-4 md:mb-6 overflow-hidden transition-colors duration-300'>
        <div className="flex border-b border-gray-100 dark:border-gray-700">
          <button className="flex-1 py-3 md:py-4 font-semibold text-sm md:text-base transition-colors cursor-pointer whitespace-nowrap text-violet-600 border-b-2 border-violet-600 
          flex justify-center items-center">
            <RiUserHeartLine className="text-lg me-1.5" />Following</button>
          <button className="flex-1 py-3 md:py-4 font-semibold text-sm md:text-base transition-colors cursor-pointer whitespace-nowrap text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700
          flex justify-center items-center">
            <RiCompass3Line className="text-lg me-1.5" />Explore</button>
        </div>
      </div>

      {/* story container */}
      <StoryBox />

      {/* posts container */}
      <div className="space-y-4 md:space-y-6">
        {/* all posts */}
        <Post />
        <Post />
        <Post />
        <Post />
        <CalcFlowCarousel />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      {/* post button */}
      <PostButton />

    </div>
  )
}

export default Feed