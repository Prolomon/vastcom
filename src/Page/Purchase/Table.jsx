import TableHead from "./TableHead"
import TableBody from "./TableBody"

const Table = () => {
  return (
    <div className="w-full h-auto">
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg border-gray-400 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-400">
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