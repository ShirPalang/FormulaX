import { Calculator } from "./Calculator"

type CalculatorModalProps = {
  status: boolean
  onShow: () => void
}

const ShowCalculatorModal = ({ status, onShow }: CalculatorModalProps) => {
  return (<>
    <div className={`fixed inset-0 w-full h-full transition-opacity duration-300 ease-out bg-black z-50
      ${status ? 'opacity-45' : 'opacity-0 hidden'}`}>
    </div>

    <div className={`fixed inset-0 z-50 w-full h-full transition-transform duration-300 ease-out flex flex-col p-8
          ${status ? "translate-y-0" : "translate-y-full"}`}
    >
      <Calculator type="post" onClose={onShow} />
    </div>
  </>
  )
}

export default ShowCalculatorModal