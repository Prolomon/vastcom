import { HiOutlineUserGroup } from "react-icons/hi2";

const Visitors = () => {
  return (
    <section className="h-[23.5rem] p-6 shadow-sm bg-white dark:bg-slate-800 dark:border border-slate-500 rounded-2xl relative">
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-1">
        <h1 className="text-xl text-gray-900 dark:text-gray-400 capitalize">Visitors</h1>
        <HiOutlineUserGroup size={28} className="text-violet-900 dark:text-green-900" />
        <span className="text-violet-900 dark:text-green-900 text-sm">(+2.8)</span>
      </div>
      <a href="#" className="text-violet-900">View More</a>
      </div>
      <div>
        {/* <div className="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6">
          <div className="inline-flex items-center">
            <span className="w-2.5 h-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
            <span className="text-[13px] text-gray-600 dark:text-neutral-400">Income</span>
          </div>
          <div className="inline-flex items-center">
            <span className="w-2.5 h-2.5 inline-block bg-gray-300 rounded-sm me-2"></span>
            <span className="text-[13px] text-gray-600 dark:text-neutral-400">Outcome</span>
          </div>
        </div>
        <div id="hs-multiple-bar-charts"></div> */}
      </div>
    </section>
  )
}

export default Visitors
