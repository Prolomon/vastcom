import { useState, useEffect } from "react"

const Dashcard = () => {

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const num = 500000
    setBalance(num.toLocaleString("EN-ng", { style: 'currency', currency: 'NGN', }))
  },[])

  return (
    <section className="w-full h-40 rounded-2xl mb-4 bg-no-repeat bg-center bg-cover shadow-sm overflow-hidden relative" style={{"backgroundImage": "url('/img/balance-bg.png')"}}>
      <div className="w-full h-full bg-transparent dark:bg-slate-800 dark:opacity-70"></div>
      <div className="absolute top-0 left-0 py-3 ps-3 w-full flex items-center justify-between">
        <div className="">
          <h3 className="text-gray-500 dark:text-gray-300 capitalize">total balance</h3>
          <h1 className="text-2xl mb-4 text-gray-900 dark:text-gray-300">{balance}</h1>
          <a href="#" className="w-full py-2 px-4 inline-flex justify-center items-center gap-x-2 text-[1rem] font-semibold rounded-md border border-none capitalize bg-gradient-to-r from-fuchsia-500 to-violet-900 hover:from-violet-900 hover:to-fuchsia-500 text-white disabled:opacity-50 disabled:pointer-events-none ">top up balance</a>
        </div>
        <div className="flex items-center relative">
          <img src="/img/widget-img.png" className="object-contain absolute end-[7.5rem]" alt="widget-img" />
          <img src="/img/mobile.gif" className="object-contain w-36" alt="mobile gif" />
        </div>
      </div>
    </section>
  )
}

export default Dashcard