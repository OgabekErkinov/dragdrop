import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'

const Dashboard = () => {
  return (
    <div className='h-[100vh] w-[100vw] px-1 bg-white flex flex-col gap-0.5 box-border '>
      <Header/>
      <div className='h-full w-full flex gap-0.5 overflow-hidden'>
        <SideBar/>
        <Main/>
      </div>
       
      
    </div>
  )
}

export default Dashboard
