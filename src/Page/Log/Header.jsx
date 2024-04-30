// import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {

  return (
    <header className="w-full mb-3 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col items-center justify-between gap-2">
        <div className="relative lg:w-72 md:w-72 sm:w-full">
            <input type="search" className="peer py-3 px-4 ps-11 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border-gray-400 border outline-none" 
            placeholder="Stock name or category" />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <CiSearch size={24} className="text-gray-500" />
            </div>
        </div>
        <div className="flex items-center gap-2">
            <h1>Date: </h1>
            <input type="date" className="py-3 px-4 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border-gray-400 border outline-none uppercase"/>
        </div>
    </header>
  )
}

export default Header