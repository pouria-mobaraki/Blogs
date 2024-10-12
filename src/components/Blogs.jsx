import React from 'react'

function Blogs({post}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {
        post.map((item)=>(
          <div className='m-4 cursor-pointer'>
            <img className='w-full rounded-2xl object-contain bg-center h-[200px]' src={item.coverImage} alt="" />
            <h3 className='text-red-500 mt-3'>{item.tag}</h3>
            <h3 className=' font-bold mt-3'>{item.title}</h3>
            <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.desc}</h3>

            <div className="flex items-center mt-5">
              <img src="./assets/Images/IMG_4682.JPG" className="w-[35px] rounded-full" alt="" />
              <div className="ml-2">
                <h3 className="font-bold text-[12px]">Pouria</h3>
                <h3 className="text-gray-500 text-[10px]">27 sep 2024</h3>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Blogs