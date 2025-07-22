import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import { IoIosArrowForward } from 'react-icons/io'


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const auth = getAuth();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let nevigate=useNavigate()


  let handleEmail = (e) => {
    setEmail(e.target.value);

  }
  let handlePassword = (e) => {
    setPassword(e.target.value);

  }

  let handleLogIn = () => {

   if(!email){
     toast.error("Please enter your Email")
     
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      toast.error("Please  Enter Valid Email")

    }
    
    else if(!password){
     toast.error("Please enter your Password")

   }else{
     createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Registration done");
        setTimeout(()=>{
          nevigate('/login')

        },3000)

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        


      });
   }

  }

  return (
    <section className='py-26'>
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
     
      <Container>
        <SubHeading text='Sign up' />
        <Flex className='items-center gap-x-2 pb-[136px]'>
          <p className='text-sm text-primary font-normal font-san'>Home</p>
          <span className='text-sm text-primary font-normal font-san'><IoIosArrowForward /></span>
          <p className='text-sm text-primary font-normal font-san'>Sign up</p>
        </Flex>
        <p className='w-[644px] text-base text-primary font-normal font-san leading-7 pb-10 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr className='text-third' />
        <h4 className=' text-[39px] text-secondary font-bold font-san pt-15 pb-10'>Your Personal Details</h4>
        <Flex className='w-w49 gap-x-5'>




          <Input className='w-[400px]' text='primary Name' type='text' check='text' placeholder=
            'primary Name' />
          <Input className='w-[400px]' text='Last Name' type='text' check='last-text' placeholder=
            'Last Name' />
        </Flex>



        <Flex className='w-w49 gap-x-5 pb-10'>
          {/* take email */}

          <div className='pt-6'>
            <label className='text-base text-second font-bold font-san leading-6' htmlFor='email'>Email: <br />
              <input onChange={handleEmail} id='email' type='email' className={`w-[400px] text-base font-normal py-4 px-2 border-b-2 border-third placeholder:text-sm placeholder:text-first placeholder:font-normal`} placeholder='Enter Email' /> <br />
            </label>
          </div>
          {/* take email */}

          <Input className='w-[400px]' text='Telephone' type='number' check='number' placeholder=
            'Your phone number' />
        </Flex>

        <h4 className=' text-[39px] text-secondary font-bold font-san pt-15 pb-10'>Your Password</h4>
        <Flex className='w-w49 gap-x-5 pb-10'>
          {/* take password */}
          <div className='pt-6'>
            <label className='text-base text-second font-bold font-san leading-6' htmlFor='password'>Password: <br />
              <input onChange={handlePassword} id='password' type='password' className={`w-[400px] text-base font-normal py-4 px-2 border-b-2 border-third placeholder:text-sm placeholder:text-first placeholder:font-normal`} placeholder='Enter Password' /> <br />
            </label>
          </div>
          {/* take password */}
          <Input className='w-[400px]' text='Repeat Password' type='password' check='repeat' placeholder=
            'Repeat password' />
        </Flex><hr className='text-third' />

        <hr className='text-third' />
        <h4 className=' text-[39px] text-secondary font-bold font-san pt-15 pb-10'>New Customer</h4>
        <Flex className='w-w49 gap-x-5'>
          <Input className='w-[400px]' text='Address 1' type='text' check='address1' placeholder=
            '4279 Zboncak Port Suite 6212' />
          <Input className='w-[400px]' text='Address 2' type='text' check='address2' placeholder=
            '-' />
        </Flex>
        <Flex className='w-w49 gap-x-5'>
          <Input className='w-[400px]' text='City' type='text' check='city' placeholder=
            'Your city' />
          <Input className='w-[400px]' text='Post Code' type='number' check='post-code' placeholder=
            '05228' />
        </Flex>
        <Flex className='w-w49 gap-x-5 pb-10'>
          <Input className='w-[400px]' text='Country' type='text' check='text' placeholder=
            'Please select' />
          <Input className='w-[400px]' text='Region/State' type='text' check='last-text' placeholder=
            'Please select' />
        </Flex><hr className='text-third' />



        <div className='pt-16 flex items-center '>
          <input id='select' className='mr-5 accent-primary' type="checkbox" />
          <label className='text-sm text-primary font-normal font-san' htmlFor="select"> I have read and agree to the Privacy Policy
          </label>
        </div>
        <Flex className='gap-x-8 items-center pt-6 pb-10'>
          <p className='text-sm text-primary font-normal font-san'>Subscribe Newsletter</p>
          <div className='flex gap-x-4 items-center'>
            <input className='accent-primary' type="checkbox" id='yes' />
            <label className='text-sm text-primary font-normal font-san' htmlFor="yes">Yes</label>
          </div>
          <div className='flex gap-x-4 items-center'>
            <input className='accent-primary' type="checkbox" id='no' />
            <label className='text-sm text-primary font-normal font-san' htmlFor="no">No</label>
          </div>
        </Flex>

        <div onClick={handleLogIn}>
          <Button text='Log in' />
        </div>
      </Container>
    </section>
  )
}

export default Signup