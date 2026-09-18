import { Link } from "react-router"

type HashtagType = {
  text: string
}

const Hashtag = ({ text }: HashtagType) => {
  return (
    <Link to='/hashtag' className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md text-xs md:text-sm font-medium transition-colors cursor-pointer">
      #{text}
    </Link>
  )
}

export default Hashtag