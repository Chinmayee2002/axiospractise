import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

const BlogDetails = () => {
    const location = useLocation();
    const post = location.state;
  return (
    <div>
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>BLOG DETAILS</h1>
        <Card title={post.title} body={post.body} />
    </div>
  )
}

export default BlogDetails;