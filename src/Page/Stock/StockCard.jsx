// import React from 'react'

const StockCard = ({ img, Name, Price, Quantity }) => {
  return (
    <a href="#" className="shadow-lg bg-white dark:bg-slate-800 dark:border border-slate-500 rounded-md p-3">
      {/* Product Image */}
      <img src={img} className="w-40 mx-auto h-32 object-fill" />
      {/* Product Name */}
      <h3 className="font-normal text-md text-gray-600 dark:text-gray-400 capitalize">{Name}</h3>
      {/* Product Price */}
      <h1 className="text-lg font-normal -my-1 dark:text-gray-200">{Price}</h1>
      {/* Product Quantity */}
      {Quantity != 0 ? <div className="w-full flex items-center justify-between text-gray-400 dark:text-gray-400 text-sm">
        {/* Quantity Available And Sold */}
        <h3 className="text-center">Stock</h3>
        <h3 className="text-center">{Quantity}</h3>
        </div> : <div className="w-full flex items-center justify-between text-gray-400">
        {/* Quantity Available And Sold */}
        <h3 className="text-center text-xs">Out of Stock</h3>
      </div>}
      {/* Stock Progress */}
    </a>
  )
}

export default StockCard