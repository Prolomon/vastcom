import { IoGridOutline } from "react-icons/io5";
import { HiOutlineChartSquareBar, HiOutlineDocumentReport } from "react-icons/hi";
import { GoLog } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineAddChart } from "react-icons/md";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import SideList from "./SideList";
import { useState } from "react";

const aside = [{
  "path": "/",
  "name": "dashboard",
  "icon": <IoGridOutline size={21}/>,
  "key": 0
},
{
  "path": "/Stock",
  "name": "stock",
  "icon": <HiOutlineChartSquareBar size={21}/>,
  "key": 1
},
{
  "path": "/Add_stock",
  "name": "add stock",
  "icon": <MdOutlineAddChart size={21} />,
  "key": 2
},
{
  "path": "/Purchase",
  "name": "purchase",
  "icon": <BsCart4 size={21} />,
  "key": 3
},
{
  "path": "/Appointment",
  "name": "appointment",
  "icon": <MdOutlineCollectionsBookmark size={21} />,
  "key": 4
},
{
  "path": "/Report",
  "name": "report",
  "icon": <HiOutlineDocumentReport size={21} />,
  "key": 5
},
{
  "path": "/Log",
  "name": "log",
  "icon": <GoLog size={18} />,
  "key": 6
}]

const SideBar = () => {

  const [sideList, setSideList] = useState(aside)

  return (
    <div className="w-full h-full relative">
      {
        sideList && sideList.map(list => {
          return (
            <SideList key={list.key} path={list.path} icon={list.icon} name={list.name}/>
          )
        })
      }
    </div>
  )
}

export default SideBar