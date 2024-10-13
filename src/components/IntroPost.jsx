import React, { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";
import { useNavigate } from "react-router-dom";

function IntroPost({ post }) {
  const navigate = useNavigate()
  return (
    <div >
      
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8" onClick={()=>navigate('blog-detail/'+post.id)}>
          <img src={post.coverImage} alt="" className="rounded-lg object-cover w-full h-full cursor-pointer"/>
          <div>
            <h4 className="text-blue-600 font-semibold"> {post.tag}</h4>
            <h2 className="text-[23px] font-bold mt-5">{post.title}</h2>
            <p className="line-clamp-6 text-gray-400 mt-5">{post.desc}</p>
            <div className="flex items-center mt-5">
              <img src="./assets/Images/IMG_4682.JPG" className="w-[50px] rounded-full" alt="" />
              <div className="ml-2">
                <h3 className="font-bold">Pouria</h3>
                <h3 className="text-gray-500">27 sep 2024</h3>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default IntroPost;
