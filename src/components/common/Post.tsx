import { Link } from "react-router"
import Hashtag from "./Hashtag"
import { RiChat3Line, RiHeart3Line, RiRepeat2Line, RiVerifiedBadgeFill } from "react-icons/ri"
import { useState } from "react"
import Comment from "./Comment"
import AddCommentKeyboard from "./AddCommentKeyboard"

const Post = () => {

  const [commentsToggle, setCommentsToggle] = useState<boolean>(false)
  const [addCommentToggle, setAddCommentToggle] = useState<boolean>(false)

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 p-4 md:p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start gap-3 md:gap-4">
          {/* user avatar */}
          <Link to='/user' className="cursor-pointer shrink-0">
            <img src="/src/assets/react.svg" alt=""
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover hover:opacity-90 transition-opacity" />
          </Link>

          {/* main */}
          <div className="flex-1 min-w-0">
            {/* username and date */}
            <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
              <Link to='/user' className="font-bold text-sm md:text-base text-gray-900 dark:text-white hover:text-violet-600 hover:underline cursor-pointer truncate">ShirPalang</Link>
              <RiVerifiedBadgeFill className="text-violet-500 text-sm md:text-base leading-none"/>
              <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm shrink-0"> . 2h ago</span>
            </div>

            {/* post content */}
            <div className="mt-3 md:mt-4 bg-linear-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-4 md:p-6 cursor-pointer relative overflow-hidden">
              <div className="font-mono text-lg md:text-2xl text-gray-800 dark:text-gray-100 mb-1.5 md:mb-2 break-all">
                (15 × 8) + 42
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-violet-600 text-2xl md:text-3xl font-bold">
                = 162
              </div>
            </div>

            {/* hashtags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
              <Hashtag text="ben10" />
              <Hashtag text="ben10" />
              <Hashtag text="ben10" />
              <Hashtag text="ben10" />
            </div>

            {/* Interaction buttons */}
            <div className="flex items-center gap-4 md:gap-6 mt-3 md:mt-4 text-gray-600 dark:text-gray-400">

              <button className="flex items-center gap-1 md:gap-2 hover:text-red-500 transition-colors duration-200 cursor-pointer">
                <RiHeart3Line className="text-lg md:text-xl" />
                <span className="font-semibold text-xs md:text-sm">245</span>
              </button>

              <button className="flex items-center gap-1 md:gap-2 hover:text-violet-600 transition-colors duration-200 cursor-pointer"
                onClick={() => setCommentsToggle(!commentsToggle)}>
                <RiChat3Line className="text-lg md:text-xl" />
                <span className="font-semibold text-xs md:text-sm">245</span>
              </button>

              <button className="flex items-center gap-1 md:gap-2 hover:text-green-500 transition-colors duration-200 cursor-pointer">
                <RiRepeat2Line className="text-lg md:text-xl" />
                <span className="font-semibold text-xs md:text-sm">245</span>
              </button>

            </div>

            {/* comments section */}
            {
              commentsToggle && (
                <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                  {/* add comment */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 md:p-4 transition-colors duration-300">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-2.5 md:p-3 mb-2 md:mb-3 min-h-11 flex items-center justify-center border border-gray-200 dark:border-gray-500 cursor-pointer hover:border-violet-300 dark:hover:border-violet-500 transition-colors"
                      onClick={() => setAddCommentToggle(!addCommentToggle)}>
                      <span className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">{addCommentToggle ? 'Cancel' : 'Click to enter your calculation...'}</span>
                    </div>
                    {/* add comment keyBoard */}
                    {
                      addCommentToggle && <AddCommentKeyboard />
                    }
                  </div>

                  {/* all comments */}
                  <div className="space-y-2 md:space-y-3">
                    <Comment />
                    <Comment />
                  </div>
                </div>
              )
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default Post