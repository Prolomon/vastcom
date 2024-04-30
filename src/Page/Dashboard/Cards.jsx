// import React from 'react'
import Card from "./card"
import { useState, useEffect } from "react"
import { MdOutlineAccountBalance } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Cards = () => {

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const num = 49088
    setBalance(num.toLocaleString("EN-ng", { style: 'currency', currency: 'NGN', }))
  },[])

  return (
    <div className="h-auto w-full grid items-center justify-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
        <Card title="new order" icon={<BsBoxSeam size={21} />} data={30000} style="w-auto inline-block rounded-md p-3 bg-violet-100 text-violet-900" />
        <Card title="new customers" icon={<HiOutlineUserGroup size={21} />} data={30000} style="w-auto inline-block rounded-md p-3 bg-red-100 text-red-700" />
        <Card title="average sales" icon={<MdOutlineAccountBalance size={21} />} data={balance} style="w-auto inline-block rounded-md p-3 bg-yellow-100 text-orange-400" />
        <Card title="gross profit" icon={<MdOutlineAccountBalance size={21} />} data={balance} style="w-auto inline-block rounded-md p-3 bg-green-100 text-green-700" />
        
    </div>
  )
}

export default Cards