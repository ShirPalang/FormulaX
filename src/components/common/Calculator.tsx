import { useState } from "react"
import { useHomeCalc } from "../../hooks/useHomeCalc"
import { CalcButtons } from "./CalcButtons"
import { calculate } from "../../utility/calculate"
import type { CalculatorProps } from "./Calculato.type"
import toast from "react-hot-toast"
import { RiSendPlaneFill } from "react-icons/ri"
import NewHashtag from "./NewHashtag"


export const Calculator = ({ onEqual, type, onClose }: CalculatorProps) => {

  const { operations, setOperations } = useHomeCalc()

  const [prevOP, setPrevOP] = useState('')

  const handleCalculator = (value: string, type: string) => {


    const prevOP = operations

    if (type === 'default' || type === 'zero') {
      setOperations(prevOP + value)

    } else if (type === 'operator') {

      let op = ''

      if (value === '×') {
        op = '*'
      } else if (value === '÷') {
        op = '/'
      } else if (value === '%') {
        toast.error('کار نمیکنه به ولله')
      } else {
        op = value
      }

      setOperations(prevOP + op)


    } else if (type === 'backspace') {
      setOperations(operations!?.slice(0, -1))

    } else if (type === 'equal') {

      const result: string = String(calculate(operations!))

      setPrevOP(`${operations}=${result}`)
      if (onEqual) {
        onEqual(result, operations!)
      } else {
        setOperations(result)
      }

    } else if (type === 'clear') {
      setOperations('')
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md transition-colors duration-300">
        {/* display */}
        <div className="mb-4 md:mb-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4 md:p-6 min-h-5 md:min-h-30 flex flex-col justify-end transition-colors duration-300">
            <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-2 break-all">{prevOP === '' ? 0 : prevOP.replace(/\//g, "÷").replace(/\*/g, "×")}</div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white break-all">{operations === '' ? 0 : operations?.replace(/\//g, "÷").replace(/\*/g, "×")}</div>
          </div>
        </div>

        {/* add hashtag section */}

        {
          type && (
            <div className=" pb-2">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 font-medium text-sm">#</span>
                  <input placeholder="Add hashtag..." className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg pl-7 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-gray-400 dark:placeholder:text-gray-500" maxLength={20} type="text" />
                </div>

                <button className="bg-violet-100 dark:bg-violet-900/30 hover:bg-violet-200 dark:hover:bg-violet-900/50 text-violet-600 dark:text-violet-400 rounded-lg px-3 md:px-4 py-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer text-xs md:text-sm">Add</button>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2">
                <NewHashtag />

              </div>

              <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 mt-1">3/5 hashtags</p>
            </div>
          )
        }

        {/* buttons */}
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          <CalcButtons type="clear" value="C" onClick={handleCalculator} />
          <CalcButtons type="backspace" value="⌫" onClick={handleCalculator} />
          <CalcButtons type="operator" value="%" onClick={handleCalculator} />
          <CalcButtons type="operator" value="÷" onClick={handleCalculator} />

          <CalcButtons type="default" value="7" onClick={handleCalculator} />
          <CalcButtons type="default" value="8" onClick={handleCalculator} />
          <CalcButtons type="default" value="9" onClick={handleCalculator} />
          <CalcButtons type="operator" value="×" onClick={handleCalculator} />

          <CalcButtons type="default" value="4" onClick={handleCalculator} />
          <CalcButtons type="default" value="5" onClick={handleCalculator} />
          <CalcButtons type="default" value="6" onClick={handleCalculator} />
          <CalcButtons type="operator" value="-" onClick={handleCalculator} />

          <CalcButtons type="default" value="1" onClick={handleCalculator} />
          <CalcButtons type="default" value="2" onClick={handleCalculator} />
          <CalcButtons type="default" value="3" onClick={handleCalculator} />
          <CalcButtons type="operator" value="+" onClick={handleCalculator} />

          <CalcButtons type="zero" value="0" onClick={handleCalculator} />
          <CalcButtons type="default" value="." onClick={handleCalculator} />
          <CalcButtons type="equal" value="=" onClick={handleCalculator} />



        </div>

        {
          type && (
            <div className="flex justify-around mt-4 gap-3">
              <button className="flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 rounded-xl py-2.5 md:py-3 font-semibold text-sm md:text-base transition-colors duration-200 whitespace-nowrap cursor-pointer"
                onClick={onClose}
              >Cancel</button>
              <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-2.5 md:py-3 font-semibold text-sm md:text-base transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer flex justify-center gap-2"><RiSendPlaneFill /> Post</button>
            </div>
          )
        }


      </div>
    </div>
  )
}
