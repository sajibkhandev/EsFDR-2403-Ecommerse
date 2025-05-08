import React from 'react'
import Container from "../components/Container"
import Image from "../components/Image"
import ErrorImage from '../assets/404.png'
import { IoSearch } from 'react-icons/io5'
import Button from '../components/Button'

const Error = () => {
  return (
    <section className='pt-40 pb-[140px]'>
       <Container>
          <Image src={ErrorImage}/>
          <p className='w-[644px] text-base text-primary font-dm font-normal pb-[50px] pt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

          <div className='relative w-[643px] border border-[#F0F0F0]'>
            <input className='p-5 w-full' type="text" placeholder='Type to search'/>
            <IoSearch className="absolute top-1/2 right-5 -translate-y-1/2" />

          </div>
          <Button className='mt-[76px]' text="Back to Home"/>
       </Container>
    </section>
  )
}

export default Error