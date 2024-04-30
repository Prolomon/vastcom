import TableHead from "./TableHead"
import TableBody from "./TableBody"

const Table = () => {
  return (
    <div className="w-full h-auto
     
     ">
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full block align-middle">
                    <div className="border rounded-lg border-gray-400 overflow-hidden">
                        <table className="w-full divide-y divide-gray-500 overflow-scroll">
                            <TableHead />
                            <TableBody />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table