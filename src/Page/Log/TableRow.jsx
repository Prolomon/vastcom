
const TableRow = ({ date, name, category, quantity, cost }) => {
  return (
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-gray-800 dark:text-gray-300">{date}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-gray-800 dark:text-gray-300 capitalize">{name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-gray-800 dark:text-gray-300">{category}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-gray-800 dark:text-gray-300 capitalize">{quantity}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-gray-800 dark:text-gray-300">{cost}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">view</button>
        </td>
    </tr>
  )
}

export default TableRow