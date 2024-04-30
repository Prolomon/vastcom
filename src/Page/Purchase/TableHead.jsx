const TableHead = () => {
  return (
    <thead className="bg-violet-400">
      <tr>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">product name</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">quantity</th>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">price</th>
      </tr>
    </thead>
  );
};

export default TableHead;
