import React from 'react'
import logo from './../assets/Images/logooo.jpg'
// import {IologoYoutube} from "react-icons/io5";
// import { IoLogoYoutube } from 'react-icons/io'
// import { IoLogoYoutube } from 'react-icons/io'
// import { IconName } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} alt="" className='w-[150px] cursor-pointer'/>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer duration-300'>Home</li>
        <li className='hover:font-bold cursor-pointer duration-300'>About</li>
        <li className='hover:font-bold cursor-pointer duration-300'>Contact Us</li>
      </ul>
      <button className='bg-red-500 font-semibold text-white rounded-full p-2 flex items-center hover:bg-red-400 duration-300'>Subscribe <IoLogoYoutube className='ml-3'/></button>
    </div>
  )
}

export default Header