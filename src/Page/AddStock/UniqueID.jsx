
const UniqueID = ({change, value}) => {
  return (
    <div className="w-full mb-2">
        <label htmlFor="uniqueid" className="block dark:text-gray-400 text-md font-medium mb-2 capitalize">Unique ID</label>
        <div className="w-full flex gap-2">
            <input type="number" id="uniqueid" className="py-3 px-4 block w-full bg-transparent border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 dark:text-gray-300 disabled:pointer-events-none" required readOnly aria-readonly name="uniqueId" onChange={change} value={value} />
            <button className="py-3 px-4 block w-auto bg-violet-700 hover:bg-violet-600 text-white border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" role="button">Generate</button>
        </div>
    </div>
  )
}

export default UniqueID
