import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import GlobalApi from '../services/GlobalApi'


function Home() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    getPost()
  },[])
  const getPost = ()=> {
    GlobalApi.getPost.then(res => {
      console.log(res);
      const result = res.data.map(item =>({
        id:item.id,
        title:item.title,
        desc:item.desc,
        tag:item.tag,
        coverImage:item.coverImage
      }))
      setPost(result)
    })
  }
  return (
    <div className='container mx-auto mt-5'>
      <Header/>
      <Search/>
      {post.length>0 ?< IntroPost post={post[3]}/>:null}
      {post.length>0 ?< Blogs post={post}/>:null}
      <Footer/>
    </div>
  )
}

export default Home

