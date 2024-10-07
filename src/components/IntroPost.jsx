import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'

function IntroPost({post}) {


  return (
    <div>
      {post.map((item,index)=>(
  <div key={index}>
  <img src={item.coverImage} alt="" />
  <div>
    <h4> {item.tag}</h4>
    <h2>{item.title}</h2>
    <h4>{item.desc}</h4>
  </div>
      </div>
      ))}
    
    </div>
  )
}

export default IntroPost