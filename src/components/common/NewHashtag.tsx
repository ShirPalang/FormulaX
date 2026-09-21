import { RiCloseLine } from 'react-icons/ri'

const NewHashtag = () => {
  return (
    <span className="inline-flex items-center gap-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
      #testTag
      <button className="w-4 h-4 flex items-center justify-center hover:bg-violet-200 dark:hover:bg-violet-800 rounded-full cursor-pointer">
        <RiCloseLine className="text-s" />
      </button>
    </span>
  )
}

export default NewHashtag