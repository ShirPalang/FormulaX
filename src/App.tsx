import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/router'
import { HomeCalcContextProvider } from './context/HomeCalcContextProvider'

function App() {

  return (
    <>
      <HomeCalcContextProvider>
        <RouterProvider router={router} />
      </HomeCalcContextProvider>
    </>
  )
}

export default App
