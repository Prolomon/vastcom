import Theme from "./Theme";
import { IoNotificationsOutline } from "react-icons/io5";

const Nav = () => {

  const handleNav = () => {
    const notificationTab = document.querySelector("#notificationTab")
    if (notificationTab.classList.contains("hidden")) {
      notificationTab.classList.remove("hidden")
    }else {
      notificationTab.classList.add("hidden")
    }
  }

  return (
    <nav className="">
        <div className="flex items-center gap-5">
          {/* theme */}
          <Theme />
          <div className="relative">
            <IoNotificationsOutline onClick={handleNav} size={24} />
            <span className="absolute top-1 end-1 inline-flex items-center py-0 px-1 rounded-full text-[0.6rem] font-medium transform -translate-y-1/2 translate-x-1/2 -ml-4 bg-red-500 text-white">2</span>
          </div>
          <div className="flex-shrink-0 group block text-white hover:underline items-center gap-2 hover:opacity-80">
            <div className="flex items-center">
              <img className="inline-block flex-shrink-0 h-8 w-8 rounded-full" src="../../public/img/profile.png" alt="Image Description" />
              <div className="ms-3 lg:block md:block sm:hidden xs:hidden xxs:hidden">
                <h4 className="font-bold text-sm text-gray-800 dark:text-white mb-[0.25rem]">Mark Wanner</h4>
                <p className="text-xs font-normal text-gray-500 mt-[-0.3rem]">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    // <nav className="w-auto flex items-center gap-4">
      
    // </nav>
  )
}

export default Nav
