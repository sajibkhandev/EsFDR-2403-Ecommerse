import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'

const Contact = () => {
  let data=useSelector((state)=>state.active.prvevalue)
  console.log(data);
  
  return (
    <section className='py-[140px]'>
      <Container>
        <SubHeading text="About"/>
          <p> <Link to={data=="Home"?"/":`/${data}`}>{data}</Link> >  contact</p>
          <h2 className='text-secondary text-[39px] font-dm font-bold pb-10 pt-[136px]'>Fill up a Form</h2>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
            <input className='py-4 border-b border-[#F0F0F0] w-[49%] mb-6' id="name" type="text" placeholder='Your name here'/>
          </label>
          <br />
          <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email <br />
            <input className='py-4 border-b border-[#F0F0F0] w-[49%] mb-6' id="email" type="text" placeholder='Your email here'/>
          </label>
          <br />
          <label className='text-base text-secondary font-dm font-bold ' htmlFor="name">Message <br />
            <textarea className='py-4 border-b border-[#F0F0F0] w-[49%]' id="name" type="text" placeholder='Your message here'/>
          </label>
          <br />

          <Button className='mt-7 mb-[140px]' text="Post"/>

          <iframe className='w-full h-[570px]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7300.667685626141!2d90.36362073414554!3d23.806724912579423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1746708067446!5m2!1sen!2sbd" ></iframe>


      </Container>
    </section>
  )
}

export default Contact