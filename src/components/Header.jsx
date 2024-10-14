import React from 'react'
import logo from './../assets/Images/logooo.jpg'
// import {IologoYoutube} from "react-icons/io5";
// import { IoLogoYoutube } from 'react-icons/io'
// import { IoLogoYoutube } from 'react-icons/io'
// import { IconName } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center'>
      {/* <img src={logo} alt="" className='w-[160px] cursor-pointer '/> */}
      <div className='text-3xl'>
        <span className='font-bold text-blue-600 italic cursor-pointer'>Pour</span><span className=' font-bold italic cursor-pointer'>ia</span>
      </div>
      <ul className='flex gap-4 md:gap-14'>
        <li className=' font-semibold hover:font-bold cursor-pointer duration-300' onClick={()=>navigate('/')}>Home</li>
        <li className='font-semibold hover:font-bold cursor-pointer duration-300'>About</li>
        <li className='font-semibold hover:font-bold cursor-pointer duration-300'>Contact Us</li>
      </ul>
      <button className='bg-blue-600 font-semibold text-white rounded-full px-2 py-1 flex items-center hover:bg-blue-500 duration-300'>Subscribe <IoLogoYoutube className='ml-3'/></button>
    </div>
  )
}

export default Header