import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/router'
import { HomeCalcContextProvider } from './context/HomeCalcContextProvider'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster/>
      <HomeCalcContextProvider>
        <RouterProvider router={router} />
      </HomeCalcContextProvider>
    </>
  )
}

export default App
