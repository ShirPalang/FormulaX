import { useState } from "react"
import { useHomeCalc } from "../../hooks/useHomeCalc"
import { CalcButtons } from "./CalcButtons"
import { calculate } from "../../utility/calculate"
import type { CalculatorProps } from "./Calculato.type"
import toast from "react-hot-toast"


export const Calculator = ({ onEqual }: CalculatorProps) => {

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

      </div>
    </div>
  )
}
