import SubHeader from "../../components/SubHeader"
import Table from "./Table"
import AddProduct from "./AddProduct"
import { BsCart4 } from "react-icons/bs";

const Purchase = () => {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll">
        <SubHeader title="purchase" path="/Purchase" icon={<BsCart4 className="flex-shrink-0 me-2" size={15} />} />
        <Table />
        <AddProduct />
    </div>
  )
}

export default Purchase