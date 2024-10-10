import React from 'react'

function Blogs({post}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {
        post.map((item)=>(
          <div>
            <img src={item.coverImage} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default Blogs