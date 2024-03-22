import React from 'react'
import Header from "../components/Header";

function Layout({children}) {
  return (
    <div>
        <Header />

        <div className='container mx-auto'>
            <h1 className='font-bold text-center text-3xl p-5 text-sky-800'>Make your life color</h1>
            {children}
        </div>
    </div>
  )
}

export default Layout