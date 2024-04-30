// import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Header = () => {

    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
        
        const data = e.target.value.toLowerCase()
        const stock = document.querySelector(".stock-list")
        const stocks = stock.querySelectorAll("a")

        Array.from(stocks).forEach(item => {
            const itemName = item.children[1].textContent
            if (itemName.toLowerCase().indexOf(data) != -1) {
                item.classList.add("block")
                item.classList.remove("hidden")
            } else {
                item.classList.add("hidden")
            }
        })
    }
    

  return (
    <header className="w-full mb-3">
        <div className="w-full flex lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col items-center justify-between gap-2">
            <div className="relative lg:w-72 md:w-72 sm:w-full">
                <input type="search" className="peer py-3 px-4 ps-11 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border-gray-700 border dark:border-slate-500 dark:text-gray-500 outline-none" 
                placeholder="Stock name or category" value={search} onChange={handleChange} />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <CiSearch size={24} className="text-gray-500" />
                </div>
            </div>
            <div className="flex">
                <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-600 dark:text-gray-400">Category: </h3>
                    <select className="py-2 px-3 bg-transparent border border-gray-700 dark:border-slate-500 pe-9 block w-full rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-300">
                        <option selected>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header