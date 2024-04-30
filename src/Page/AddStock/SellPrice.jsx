
const SellPrice = ({change, value}) => {
  return (
    <div className="w-full mb-2">
        <label htmlFor="sell-price" className="block text-md dark:text-gray-400 font-medium mb-2 capitalize">selling price</label>
        <input type="number" id="sell-price" className="py-3 px-4 block w-full bg-transparent border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 dark:text-gray-300 disabled:pointer-events-none" required readOnly aria-readonly placeholder="e.g #450" name="sellPrice" onChange={change} value={value} />
    </div>
  )
}

export default SellPrice