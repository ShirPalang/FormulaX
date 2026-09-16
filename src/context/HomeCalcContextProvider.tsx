import React, { createContext, useState, type PropsWithChildren } from "react"

export type CalcOpType = {
  operations: string | null
  setOperations: (data: string) => void
}

export const HomeCalcContext = createContext<CalcOpType | null>(null)

export const HomeCalcContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [operations, setOperations] = useState<string>('')

  return (
    <HomeCalcContext value={{ operations, setOperations }}>
      {children}
    </HomeCalcContext>
  )
}