import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const MyAccount = () => {
  return (
    <section>
        <Container>
            <h1 className = 'font-dm font-bold text-[49px] text-[#262626] pt-[124px]' >My Account</h1>
            <p className='font-dm font-normal text-[12px] text-[#6D6D60] pb-[127px]'>home > myaccount</p>
            <Flex className='gap-[39px]'>
                <div className='w-[234px]'>
                    <ul className="space-y-6 pb-[140px]">
                        <li className="font-semibold pb-[19px] border-b border-[#F0F0F0] font-dm font-bold text-[16px] text-[#262626]">Dashboard</li>
                        <li className="text-[#767676] hover:text-[#262626] border-[#F0F0F0] pb-[19px] border-b">Others</li>
                        <li className="text-[#767676] hover:text-[#262626] border-[#F0F0F0] pb-[19px] border-b">Donwloads</li>
                        <li className="text-[#767676] hover:text-[#262626] border-[#F0F0F0] pb-[19px] border-b">Addresses</li>
                        <li className="text-[#767676] hover:text-[#262626] border-[#F0F0F0] pb-[19px] border-b">Account details</li>
                        <li className="text-[#767676] hover:text-[#262626] border-[#F0F0F0] pb-[19px] border-b">Logout</li>
                    </ul>
                </div>
                <div className='w-[918px] text-[#767676]'>
                    <h1>Hello <span className='font-bold'>admin</span> (not <span className='font-bold'>admin?</span> <span className='font-bold'>Log out</span>)</h1> <br />

                    <h1>From your account dashboard you can view your <span className='font-bold'>recent orders,</span> manage your <span className='font-bold'>shipping and billing addresses,</span> and <span className='font-bold'>edit your password and account details.</span></h1>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default MyAccount

