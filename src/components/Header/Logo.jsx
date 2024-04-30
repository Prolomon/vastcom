import { PiChartPolarLight } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-auto flex gap-1 items-center">
        <PiChartPolarLight size={35} />
        <h1 className="text-xl font-bold">Vast</h1>
      </div>
    </div>
  )
}

export default Logo
