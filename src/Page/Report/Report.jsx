import { ImFilesEmpty } from "react-icons/im";
import SubHeader from "../../components/SubHeader";
import { HiOutlineDocumentReport } from "react-icons/hi";

const Report = () => {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll">
        <SubHeader title="report" path="/Report" icon={<HiOutlineDocumentReport className="flex-shrink-0 me-2" size={15} />} />
        <div className="w-full h-full flex items-center justify-center flex-col gap-1">
            <ImFilesEmpty size={35} className="text-gray-400" />
            <h1 className="text-gray-500 capitalize text-lg">no record found</h1>
        </div>
    </div>
  )
}

export default Report