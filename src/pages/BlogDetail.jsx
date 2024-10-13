import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const {id} = useParams()

  useEffect(()=>{
console.log('ID',id);

  },[])

  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail