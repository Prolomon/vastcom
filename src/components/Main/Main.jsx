// import React from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import Loader from '../Loader/Loader.jsx'
import NotificationList from './NotificationList.jsx'

const Dashboard = lazy(() => import("../../Page/Dashboard/Dashboard.jsx"))
const Stock = lazy(() => import("../../Page/Stock/Stock"))
const AddStock = lazy(() => import("../../Page/AddStock/AddStock"))
const Log = lazy(() => import("../../Page/Log/Log"))
const Purchase = lazy(() => import("../../Page/Purchase/Purchase"))
const Report = lazy(() => import("../../Page/Report/Report"))

const Main = () => {
  
  return (
    <main className='w-full h-screen relative'>
      {/* notification */}
      <div id="notificationTab" className='lg:w-80 md:w-80 sm:w-full xs:w-full xxs:w-full h-auto absolute top-0 lg:end-12 md:end-12 sm:end-0 xs:end-0 xxs:end-0 bg-white dark:bg-slate-900 rounded-md shadow-lg z-40 hidden'>
        <div className="w-full p-3">
          <h3 className='text-lg text-gray-900 dark:text-gray-100 text-center'>Notifications</h3>
        </div>
        <hr />
        <ul className="w-full h-auto p-3">
          <NotificationList />
          <NotificationList />
          <NotificationList />
          <NotificationList />

          <a href="#" className="w-full h-14 rounded-lg p-2 bg-gray-200 dark:bg-slate-800 capitalize text-lg inline-flex items-center justify-center text-orange-500 underline">check more</a>
        </ul>
      </div>
      <Routes>
          <Route path="/" element={<Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>} />
          <Route path="/Stock" element={<Suspense fallback={<Loader />}>
            <Stock />
          </Suspense>} />
          <Route path="/Add_Stock" element={<Suspense fallback={<Loader />}>
            <AddStock />
          </Suspense>} />
          <Route path="/Log" element={<Suspense fallback={<Loader />}>
            <Log />
          </Suspense>} />
          <Route path="/Purchase" element={<Suspense fallback={<Loader />}>
            <Purchase />
          </Suspense>} />
          <Route path="/Report" element={<Suspense fallback={<Loader />}>
            <Report />
          </Suspense>} />
          <Route path="/Appointment" element={<Suspense fallback={<Loader />}>
            <Appointment />
          </Suspense>} />
        </Routes>
    </main>
  )
}

export default Main
