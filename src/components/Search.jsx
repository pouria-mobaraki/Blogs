import React, { useState } from 'react'
import banner from './../assets/Images/fronend-blog.jpg'
import { IoSearchOutline } from "react-icons/io5";

function Search({selectedTag}) {
  const tags =[
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'React'
    },
    {
      id:3,
      name:'React Native'
    },
    {
      id:4,
      name:'Angular'
    },
    {
      id:5,
      name:'Vue'
    },

  ]

  const [filterActive,setFilterActive] = useState(null)

  return (
    <div className='text-center flex justify-center mt-8 items-center flex-col px-[70] md:px-[150px]'>
      <img src={banner} alt="" className='rounded-2xl w-9/12 '/>
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] lg:w-6/12  flex items-center">
      <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input type="text" placeholder='Search' className='outline-none ml-2' />
      </div>
      <div className='flex gap-10 justify-center mt-5 max-[512px]:flex-col'>
        {tags.map((item,index) => (
          <ul className='cursor-pointer'>
            <li key={item.id}
             onClick={()=> {setFilterActive(index);selectedTag(item.name)}}
              className={`${index===filterActive ? "bg-sky-600 text-white  duration-200" : null} p-2 pb-2 rounded-full hover:scale-110 hover:border-[1px] duration-200 transition-all border-sky-500`}>
                {item.name}
                </li>
          </ul>
        ))}
        
        
      </div>
    </div>
  ) 
}

;

export default Search