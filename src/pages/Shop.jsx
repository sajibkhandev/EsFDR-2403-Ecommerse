import React, { useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Shop = () => {
   let data2=useSelector((state)=>state.active.prvevalue)



  
 
  return (
  <section className='py-[126px]'>
     <Container>
    <SubHeading text="Shop"/>
      <p> <Link to={data2=="Home"?"/":`/${data2}`}>{data2}</Link> >  shop</p>
  
   
   </Container>
  </section>
  )
}

export default Shop