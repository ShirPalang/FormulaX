type ButtonType = {
  type: 'default' | 'clear' | 'operator' | 'zero' | 'equal' | 'backspace',
  value: string
  onClick: (value: string, type: string) => void
}

export const CalcButtons = ({ type, value, onClick }: ButtonType) => {


  const allTypes = {
    default: 'bg-white dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-50 text-gray-900 dark:text-white',
    clear: 'bg-red-500 hover:bg-red-600 text-white',
    operator: 'bg-violet-500 hover:bg-violet-600 text-white',
    zero: 'bg-white dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-50 text-gray-900 dark:text-white col-span-2',
    equal: 'bg-violet-600 hover:bg-violet-700 text-white',
    backspace: 'bg-white dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-50 text-gray-900 dark:text-white'
  }

  return (
    <button
      className={`${allTypes[type]} rounded-xl py-4 
      md:py-5 text-lg md:text-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md 
      active:scale-95 whitespace-nowrap cursor-pointer`}
      onClick={() => onClick(value, type)}>
      {value}
    </button>
  )
}
