import Header from "./Header"
import Table from "./Table"
import SubHeader from "../../components/SubHeader"
import { GoLog } from "react-icons/go";

const Log = () => {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll box-border">
        <SubHeader title="log" path="/Log" icon={<GoLog className="flex-shrink-0 me-2" size={15} />} />
        <Header />
        <div className="w-full ">
          <Table />
        </div>
    </div>
  )
}

export default Log