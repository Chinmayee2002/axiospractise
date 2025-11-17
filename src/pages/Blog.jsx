import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log("Fetched posts:", res.data.slice(0, 10));
        setPosts(res.data.slice(0,10));
      }catch(err){
        console.log(err);
      }
    };
    fetchPosts();
  },[]);
  return(
    <div>
      <h1 style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>BLOG POST</h1>
      {posts.map((post)=>(
        <Card
        key={post.id}
        title={post.title}
        body={post.body}
        />
      ))}
    </div>
  );
};

export default Blog;