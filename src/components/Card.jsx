import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ( {title, body }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blogdetails',{
            state: { title, body },
        });
    };
  return (
    <div
    onClick={handleClick}
    style={{border:'1px solid black', margin:'10px', padding:'10px', borderRadius:'5px'}}>
    <h2>{title}</h2>
    <p>{body}</p>
    </div>
  );
};

export default Card;