import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'


const Shop = () => {

  let dispatch=useDispatch()
  let data=useSelector((state)=>state.counter.value)
 
  return (
   <Container>
   <button onClick={()=>dispatch(increment(1))}>Increment</button>
   <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
   <h1>{data}</h1>
   </Container>
  )
}

export default Shop