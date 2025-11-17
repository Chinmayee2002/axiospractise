import React from 'react'
import { useNavigate } from 'react-router-dom'; 


const Home = () => {
    const navigate= useNavigate();
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <div onClick={()=> navigate('/blog')}
        style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "8px",
            padding: "10px 20px",
            backgroundColor: "magenta",
            color: "white",
            width: "100px",
            cursor: "pointer"
            
        }}>
            Click here</div>
    </div>
  )
}

export default Home;