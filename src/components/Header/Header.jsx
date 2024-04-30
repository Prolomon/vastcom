// import React from 'react'
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <header id="p-head" className="w-full h-auto px-4 sm:justify-start py-3  z-50 bg-white text-gray-900 dark:text-gray-50 shadow-lg dark:bg-slate-800 dark:border-b border-gray-300">
        <div className="w-full flex items-center justify-between mx-auto py-2">
          <Logo />
          <Nav />
        </div>
    </header>
  )
}

export default Header
