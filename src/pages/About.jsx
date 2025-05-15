import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import ProductOne from '../assets/product.png'
import AboutCart from '../components/AboutCart'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'

const About = () => {
   let dispatch=useDispatch()
   let data =useSelector((state)=>(state.counter.value))
  
  return (
   <section className='py-[140px]'>
    <Container>

   <button onClick={()=>dispatch(increment(1))}>Increment</button>
   <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
   <h1>{data}</h1>



       <Flex className='justify-between pb-[128px]'>
            <div className='w-[49%] relative'>
              <Image className='w-full' src={ProductOne}/>
                 <Button className='absolute bottom-10 left-1/2 -translate-x-1/2'text="Our Brands"/>
              </div>
              <div className='w-[49%] relative'>
              <Image className='w-full' src={ProductOne}/>
                 <Button className='absolute bottom-10 left-1/2 -translate-x-1/2'text="Our Stores"/>
              </div>
       </Flex>
       <p className='text-f39 text-secondary font-noraml font-dm'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

       <Flex className='justify-between mt-[128px]'>
            <AboutCart title="Our Story"  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
            <AboutCart title="Our Brands"  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
            <AboutCart title="Our Story"  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
       </Flex>

    </Container>
   </section>
  )
}

export default About