import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Login = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
            <SubHeading text="Login"/>
            <p>Home  >  Login</p>

            <p className='w-[644px] text-base text-primary font-dm font-normal border-b border-[#F0F0F0] pb-[60px] mb-[57px] pt-[128px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <h2 className='text-secondary text-[39px] font-dm font-bold pb-10'>Returning Customer</h2>


           <Flex className='gap-x-[39px]'>
                  <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email address <br />
                    <input className='py-4 border-b border-[#F0F0F0] w-[508px] mb-6' id="email" type="text" placeholder='company@domain.com'/>
                  </label>
                  <br />

                  <label className='text-base text-secondary font-dm font-bold ' htmlFor="password">Password <br />
                  <input className='py-4 border-b border-[#F0F0F0] w-[508px] mb-6' id="password" type="text" placeholder='........'/>
                </label>
           </Flex>

           <div className='border-b border-[#F0F0F0] pb-[70px] pt-2'>
           <Button className='' text="Log in"/>
           </div>
           <h2 className='text-secondary text-[39px] font-dm font-bold pb-10 pt-[58px]'>New Customer</h2>
           <p className='w-[644px] text-base text-primary font-dm font-normal pb-[50px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
           <Button  text="Continue"/>








        </Container>
    </section>
  )
}

export default Login