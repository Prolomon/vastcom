
const TableRow = ({ name, quantity, cost }) => {
  return (
    <tr className="divide-x divide-gray-400">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">{name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">{quantity}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">{cost}</td>
    </tr>
  )
}

export default TableRow