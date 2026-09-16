type ButtonType = {
  type: 'default' | 'clear' | 'operator' | 'zero',
  value: string
}

export const CalcButtons = ({ type, value }: ButtonType) => {

  const kosmso = {
    default: 'bg-white dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-50 text-gray-900 dark:text-white',
    clear: 'bg-red-500 hover:bg-red-600 text-white',
    operator: 'bg-violet-500 hover:bg-violet-600 text-white',
    zero: 'bg-white dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-50 text-gray-900 dark:text-white col-span-2'
  }

  return (
    <button
      className={`${kosmso[type]} rounded-xl py-4 
      md:py-5 text-lg md:text-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md 
      active:scale-95 whitespace-nowrap cursor-pointer`}>
      {value}
    </button>
  )
}
