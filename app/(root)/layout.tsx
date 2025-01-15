import Header from '@/components/Header'
import { Haze } from 'lucide-react'
import React, { Children } from 'react'
import {ReactNode} from "react"

const Layout=({children}:{Children:ReactNode})=>{
  return (
    <main className='root-container'>
      <div className='mx-auto max-w-7xl'>
        <Header/>
       <div className='mt-20 pb-20'>{children}</div>

      </div>

    </main>
  )

}

export default Layout;