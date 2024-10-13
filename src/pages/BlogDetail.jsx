import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../services/GlobalApi';

function BlogDetail() {
  const {id} = useParams()
  const [post,setPost]=useState([])

  useEffect(()=>{
console.log('ID',id);
getBlogById()


  },[])

  const getBlogById = ()=> {
    GlobalApi.getPostById(id).then(res =>{
      console.log(res.data[id-1]);
      
      const item = res.data[id-1]
      const result = {
        id:item.id,
        title:item.title,
        desc:item.desc,
        tag:item.tag,
        coverImage:item.coverImage
      }
      console.log('result',result);
      setPost(result)
      
    })
  }

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-blue-500 text-[12px]'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold'>{post.title}</h3>
      <img className='rounded-2xl mt-5 mb-5 w-full' src={post.coverImage} alt="" />
      <h3>{post.desc}</h3>
    
    </div>
  )
}

export default BlogDetail