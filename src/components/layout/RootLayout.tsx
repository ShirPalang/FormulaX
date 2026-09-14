import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300'>
      <Outlet/>
    </div>
  )
}
