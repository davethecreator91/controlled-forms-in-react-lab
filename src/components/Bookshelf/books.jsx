import React from 'react'

export default function books({author, title}) {
  return (
    <div 
    style={{
        backgroundColor: 'gray',
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        }}>
        <h2>{title}</h2>
        <p>{author}</p>

    </div>
  )
}

