import { useContext } from "react"
import { HomeCalcContext } from "../context/HomeCalcContextProvider"

export const useHomeCalc = () => {
  const context = useContext(HomeCalcContext)

  if (!context) {
    throw new Error("useHomeCalc must be used within HomeCalcContextProvider")
  }

  return context
}