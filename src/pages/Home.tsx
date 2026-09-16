import { Calculator } from "../components/common/Calculator"

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex items-center justify-center min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-80px)] pb-20 md:pb-8">
      {/* calculator */}
      <Calculator/>
    </div>

  )
}
