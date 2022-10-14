import React from 'react'
import Menubar from './Menubar'
import {Outlet} from 'react-router'
import Footer from './Footer'


const SharedLayout = () => {
  return (
    <div>
        <Menubar/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default SharedLayout