import { CalcButtons } from "../components/common/CalcButtons"

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex items-center justify-center min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-80px)] pb-20 md:pb-8">
      {/* calculator */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md transition-colors duration-300">
          {/* display */}
          <div className="mb-4 md:mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4 md:p-6 min-h-5 md:min-h-30 flex flex-col justify-end transition-colors duration-300">
              <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-2 break-all">0</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white break-all">0</div>
            </div>
          </div>

          {/* buttons */}
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            <CalcButtons type="clear" value="C" />
            <CalcButtons type="default" value="⌫" />
            <CalcButtons type="operator" value="%" />
            <CalcButtons type="operator" value="÷" />

            <CalcButtons type="default" value="7" />
            <CalcButtons type="default" value="8" />
            <CalcButtons type="default" value="9" />
            <CalcButtons type="operator" value="×" />

            <CalcButtons type="default" value="4" />
            <CalcButtons type="default" value="5" />
            <CalcButtons type="default" value="6" />
            <CalcButtons type="operator" value="-" />

            <CalcButtons type="default" value="1" />
            <CalcButtons type="default" value="2" />
            <CalcButtons type="default" value="3" />
            <CalcButtons type="operator" value="+" />

            <CalcButtons type="zero" value="0" />
            <CalcButtons type="default" value="." />
            <CalcButtons type="operator" value="=" />



          </div>

        </div>
      </div>
    </div>

  )
}
