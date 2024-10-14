import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import GlobalApi from "../services/GlobalApi";

function Home() {
  const [post, setPost] = useState([]);
  const [orgFilterPost, setOrgFilterPost] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalApi.getPost.then((res) => {
      const result = res.data.map((item) => ({
        id: item.id,
        title: item.title,
        desc: item.desc,
        tag: item.tag,
        coverImage: item.coverImage,
      }));
      console.log(post);
      
      setPost(result);
      setOrgFilterPost(result)
    });
    
  };

  const filterPost = (tag) => {
console.log(tag);


    if(tag==="All"){
      setPost(orgFilterPost)
      return
    }
    const result = orgFilterPost.filter(item => item.tag === tag);
    setPost(result)
  };

  return (
    <div>
      {/* <Header/> */}
      <Search selectedTag={(tag) => filterPost(tag)} />
      {post.length > 0 ? <IntroPost post={post[0]} /> : null}
      {post.length > 0 ? <Blogs post={post} /> : null}
    </div>
  );
}

export default Home;
