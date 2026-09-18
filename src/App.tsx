import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/router'
import { HomeCalcContextProvider } from './context/HomeCalcContextProvider'
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/themeStore'
import { useEffect } from 'react'

function App() {

  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark", theme === 'dark'
    )
  }, [theme])

  return (
    <>
      <Toaster />
      <HomeCalcContextProvider>
        <RouterProvider router={router} />
      </HomeCalcContextProvider>
    </>
  )
}

export default App
