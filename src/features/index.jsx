import React from 'react'
import Navbar from '../module/Navbar'
import Header from '../components/Header'

const DashboardLayout = ({children}) => {
  return (
    <>
        <div className='flex justify-between'>
            <Navbar/>
            <div className='w-[82%] h-[100vh] overflow-y-auto '>
                <Header/>
                {children}
            </div>
        </div>
    </>
  )
}

export default DashboardLayout