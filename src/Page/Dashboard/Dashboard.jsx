import Cards from "./Cards"
import DashCalendar from './DashCalendar'
import AddStock from "./AddStock"
import SubHeader from "../../components/SubHeader"
import Dashcard from "./Dashcard"
import Customer from "./Customer"
import Visitors from "./Visitors"
import Order from "./Order"
import { IoGridOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll">
      <SubHeader title="dashboard" path="/" icon={<IoGridOutline className="flex-shrink-0 me-2" size={15} />} />
      {/* first section */}
      <div className="flex w-full lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col gap-[2%] mb-5">
        <div className="lg:w-[58%] md:w-[58%] sm:w-full xs:w-full xxs:w-full">
          <Dashcard />
          <Cards />
        </div>
        <Customer />
      </div>
      <div className="w-full flex gap-[2%] lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col mt-2">
        <div className="lg:w-[60%] md:w-[60%] sm:w-full xs:w-full xxs:w-full gap-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1">
          <Visitors />
          <div>
            <DashCalendar />
            <AddStock />
          </div>
        </div>
        <Order />
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Dashboard
