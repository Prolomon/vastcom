
const Order = () => {

  return (
    <section className="lg:w-[38%] md:w-[38%] sm:w-full xs:w-full xxs:w-full h-[23.5rem] p-6 shadow-sm bg-white dark:bg-slate-800 dark:border border-slate-500  rounded-2xl relative lg:mt-0 md:mt-0 sm:mt-4 xs:mt-4 xxs:mt-4">
      <div className="w-full">
        <h1 className="text-xl text-gray-900 dark:text-gray-400 capitalize">monthly profits</h1>
        <p className="text-gray-400">(Total profit growth of 30%)</p>
      </div>
        <div id="more-order" className="w-40 h-auto bg-white shadow-md hidden dark:bg-slate-800 dark:border border-slate-500 rounded-sm absolute end-6">
            <span className="p-3 py-4">Today</span>
            <hr />
            <span className="p-3 py-4">Yesterday</span>
        </div> 
    </section>
  )
}

export default Order
