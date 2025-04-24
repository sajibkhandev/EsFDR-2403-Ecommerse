import React from 'react'
import Navber from './Navber'
import Sideber from './Sideber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Sideber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout