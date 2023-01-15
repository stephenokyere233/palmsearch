import React from 'react'
import Dropdown from '../dropdown/Dropdown'

const Navbar = () => {
  return (
    <div className='border h-20 flex justify-between items-center px-[6em]'>
      <div className='text-2xl font-bold uppercase'>
        logo
      </div>
      <div className='border p-2 font-medium bg-purple-700 rounded-md text-white'>
        Need Help?
      </div>
      <Dropdown/>
    </div>
  )
}

export default Navbar
