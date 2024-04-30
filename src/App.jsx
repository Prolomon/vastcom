// import React from "react"
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from "./components/Main/Main"

function App() {

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-700 font-sans overflow-hidden dark:bg-slate-800">
      <Header />
      <div className="w-full h-auto flex">
        <Aside />
        <Main />
      </div>
    </div>
  )
}

export default App
