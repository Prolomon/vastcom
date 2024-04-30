
const Discount = ({change, value}) => {
  return (
    <div className="mb-2">
        <div className="inline-block w-full">
          <label htmlFor="discount" className="block dark:text-gray-400 text-md font-medium mb-2 capitalize">Discount</label>
          <input name="discount" type="number" id="discount" className="py-3 px-4 block bg-transparent w-full rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-300 border-gray-400" readOnly name="discount" onChange={change} value={value} />
        </div>
        <div className="w-full flex gap-2 mt-3 items-center">
          <input name="discount-checkbox" type="checkbox" id="discount-checkbox" className="accent-violet-700 outline-none bg-transparent " onClick={e => {
            const input = document.querySelector('#discount')
            if (e.target.checked === true) {
              input.removeAttribute("readOnly")
            } else {
              console.log("no");
              input.setAttribute("readOnly", "")
            }
          }} />
          <label htmlFor="discount-checkbox" className="dark:text-gray-400">Add Discount</label>
        </div>
    </div>
  )
}

export default Discount