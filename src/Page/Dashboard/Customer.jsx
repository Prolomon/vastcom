import { IoIosMore } from "react-icons/io";
import CustomerList from "./CustomerList";

const Customer = () => {

  const handleClick = () => {
    const topCustomer = document.querySelector("#more-customer")

    if (topCustomer.classList.contains("hidden")) {
      topCustomer.classList.remove("hidden")
    } else {
      topCustomer.classList.add("hidden")
    }

  } 

  return (
    <section className="lg:w-[40%] md:w-[40%] sm:w-full xs:w-full xxs:w-full h-[23.5rem] p-6 shadow-sm bg-white dark:bg-slate-800 dark:border border-slate-500  rounded-2xl relative lg:mt-0 md:mt-0 sm:mt-3 xs:mt-3 xxs:mt-3">
        <div className="w-full flex items-center justify-between">
            <h1 className="text-xl text-gray-900 dark:text-gray-400 capitalize">top 5 customer</h1>
            <IoIosMore size={28} onClick={handleClick} />
        </div>
        <div id="more-customer" className="w-40 h-auto bg-white shadow-md hidden dark:bg-slate-800 dark:border border-slate-500 rounded-sm absolute end-6">
            <span className="p-3 py-4">Today</span>
            <hr />
            <span className="p-3 py-4">Yesterday</span>
        </div>
        <ul>
          <CustomerList />
          <CustomerList />
          <CustomerList />
          <CustomerList />
          <CustomerList />
        </ul>
    </section>
  )
}

export default Customer