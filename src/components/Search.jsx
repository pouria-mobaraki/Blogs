import React from 'react'
import banner from './../assets/Images/fronend-blog.jpg'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='text-center flex justify-center mt-8 items-center flex-col px-[70] md:px-[150px] '>
      <img src={banner} alt="" className='rounded-2xl w-9/12 '/>
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] lg:w-6/12  flex items-center">
      <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input type="text" placeholder='Search' className='outline-none ml-2' />
      </div>
    </div>
  ) 
}

export default Search