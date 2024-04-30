import { MdAdd } from "react-icons/md"
import { Link } from "react-router-dom"

const AddStock = () => {

  return (
    <Link to="/Add_Stock" className='bg-white dark:bg-slate-800 dark:border rounded-2xl border-violet-700 border-2 border-dashed shadow-2xl h-11 mt-5 flex gap-2 items-center justify-center text-gray-900 dark:text-gray-400'>
          <MdAdd size={25} />
          <h1 className="text-lg">Add Stock</h1>
    </Link>
  )
}

export default AddStock