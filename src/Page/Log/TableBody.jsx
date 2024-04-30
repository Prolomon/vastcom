import TableRow from "./TableRow"

const TableBody = () => {

  return (
    <tbody className="divide-y divide-gray-400">
        <TableRow date="07/12/2023" name="milo " category="groceries" quantity={23} cost={12890} />
        <TableRow date="07/12/2023" name="milo " category="groceries" quantity={23} cost={12890} />
        <TableRow date="07/12/2023" name="milo " category="groceries" quantity={23} cost={12890} />
    </tbody>
  )
}

export default TableBody
