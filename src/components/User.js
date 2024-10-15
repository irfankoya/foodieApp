import React, { useState } from 'react'

const User = (props) => {
  const[count,setCount]=useState(0)
  const [count1]=useState(1)

  const increment=()=>{setCount(count+1)}
  const decrement=()=>{setCount(count-1)}
  return (
    <div className='user-card'>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>Count={count}</h1>
      <h1>Count={count1}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Ernakulam</h3>
        <h4>Contact: 8113086818</h4>
    </div>
  )
}

export default User