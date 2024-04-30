// import React from 'react'
import img from "../../../public/img/stock_img.png"
import StockCard from "./StockCard"
import Header from "./Header"
import SubHeader from "../../components/SubHeader"
import { HiOutlineChartSquareBar } from "react-icons/hi";
import stockData from "../../../public/json/stock.json"
import { useState, useEffect } from "react"

const Stock = () => {

  const [stock, setStock] = useState([])

  useEffect(() => {
    setStock(stockData)
  },[stock])

  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll">
      <SubHeader title="stock" path="/Stock" icon={<HiOutlineChartSquareBar className="flex-shrink-0 me-2" size={15} />} />
      <Header />
      <div className="stock-list w-full grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-1 gap-3">
        {stock&& stock.map(item => {
            const num = Number(item.productPrice)
            return(
              <StockCard key={item.id} img={img} Name={item.productName} Price={num.toLocaleString("EN-ng", { style: 'currency', currency: 'NGN', })} Quantity={item.quantity} /> 
            )
        })} 
      </div>
    </div>
  )
}

export default Stock
