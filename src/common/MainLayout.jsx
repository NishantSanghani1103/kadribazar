import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout() {

    let {pathname} = useLocation()
    // console.log(pathname)


    useEffect(()=>{
        window.scrollTo({
            top:"0",
            behavior:"smooth"
        })
    },[pathname])

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
