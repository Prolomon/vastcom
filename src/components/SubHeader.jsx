import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubHeader = ({title, icon, path}) => {
  return (
    <header className="w-full py-3 px-1 flex items-center justify-between text-gray-900 dark:text-gray-100 mb-2">
      <h1 className="text-2xl font-bold capitalize lg:block md:block sm:hidden xs:hidden xxs:hidden">{title}</h1>
      <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
        <li className="inline-flex items-center">
          <Link to={path} className="flex items-center text-sm text-gray-500 hover:text-violet-900 focus:outline-none focus:text-violet-900 dark:focus:text-violet-800">
            {icon}
            <p className="capitalize">{title}</p>
          </Link>
            <IoChevronForward className="text-gray-500" />
        </li>
        <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">Application</li>
      </ol>
    </header>
  )
}

export default SubHeader
