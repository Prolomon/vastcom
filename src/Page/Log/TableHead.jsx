const TableHead = () => {
  return (
    <thead className="bg-violet-400">
      <tr>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">date</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">product name</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">category</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">quantity</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">cost</th>
        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase">action</th>
      </tr>
    </thead>
  );
};

export default TableHead;
