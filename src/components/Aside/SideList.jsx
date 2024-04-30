import { NavLink } from "react-router-dom";

const SideList = ({icon, path, name}) => {
  return (
    <NavLink to={path} activeStyle={{ color: 'red' }} className="w-full relative flex items-center justify-center gap-2 py-2 lg:px-2 md:py-2 sm:py-1 xs:py-2 xxs:px-1 hover:bg-purple-200 px-2 mt-1 hover:text-violet-900 hover:after:w-1 hover:after:h-8 hover:after:absolute hover:after:end-0 hover:after:bg-violet-900 hover:after:rounded-l-lg  text-gray-900 dark:text-gray-100"
    activeClassName="text-white bg-violet-700">
        {icon}
        <h3 className="capitalize hidden">{name}</h3>
    </NavLink>
  )
}

export default SideList
