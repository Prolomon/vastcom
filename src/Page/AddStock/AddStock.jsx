import SubHeader from "../../components/SubHeader"
import Form from "./Form"
import Category from "./Category"
import { MdOutlineAddChart } from "react-icons/md";

const AddStock = () => {

  return (
    <div className="w-full h-full p-4 overflow-y-scroll">
      <SubHeader title="add stock" path="/Add_Stock" icon={<MdOutlineAddChart className="flex-shrink-0 me-2" size={15} />} />
      <Form />
      <hr className="border-violet-700"/>
      <Category />
    </div>
  )
}

export default AddStock
