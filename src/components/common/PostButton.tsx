import { useState } from "react";
import { RiAddLine, RiCloseLargeLine } from "react-icons/ri"
import { Calculator } from "./Calculator";

const PostButton = () => {

  const [showCalculator, setShowCalculator] = useState<boolean>(false)

  const handlePostKeyboard = () => {
    setShowCalculator(!showCalculator)
  }


  return (
    <>
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 z-40"
        onClick={handlePostKeyboard}>
        <RiAddLine className="ri-add-line text-xl md:text-2xl" />
      </div>


      {/* show calculator for post */}
      <div className={`fixed inset-0 w-full h-full transition-opacity duration-300 ease-out bg-black z-50
      ${showCalculator ? 'opacity-45' : 'opacity-0 hidden'}`}>
      </div>

      <div className={`fixed inset-0 z-50 w-full h-full transition-transform duration-300 ease-out flex flex-col p-8
          ${showCalculator ? "translate-y-0" : "translate-y-full"}`}
        onClick={() => console.log('salam')}
      >
        <span onClick={handlePostKeyboard}>
          <RiCloseLargeLine className="text-white text-2xl" />
        </span>
        <Calculator />
      </div>
    </>
  )
}

export default PostButton