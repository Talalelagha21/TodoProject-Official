import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'




const Header = () => {
  return (
   <header className='flex justify-between px-4 pt-4 ml-8'>
    <div className='flex'>
      <h1 className='text-2xl font-bold mr-12'>DashBoard</h1>
    </div>
    <div className='flex flex-row space-x-5 '>
      <h2>Welcome, Talal Elagha</h2>
      <FaRegUserCircle size={25} className=''/>
    </div>
      
   </header>
  )
}


export default Header