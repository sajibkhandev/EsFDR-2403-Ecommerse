import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Tabrow from '../components/Tabrow'
import Button from '../components/Button'

const Checkout = () => {
  return (
    <section>
      <Container>
        <h1 className='py-[120px] font-bold font-dm text-4xl text-secondary'>Checkout</h1>
        <p className='font-dm font-normal text-primary text-base'>Have a coupon? <span className='text-secondary cursor-pointer'>Click here to enter your code</span></p>
        <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>Billing Details</h1>

        <Flex className='gap-x-10 flex-wrap pb-[70px]'>
          <label className='text-base font-dm font-bold w-[35%] text-secondary' htmlFor="name">First Name <br />
            <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="text" name="" id="name" placeholder='First Name' />
          </label> <br />
          <label className='text-base font-dm w-[35%] font-bold text-secondary' htmlFor="last_name">Last Name <br />
            <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-full' type="text" name="" id="last_name" placeholder='Last Name' />
          </label> <br />
        </Flex>
        <label className='text-base font-dm font-bold text-secondary' htmlFor="com_name">Companye Name (optional) <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="com_name" placeholder='Company Name' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="con_name">Country * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="con_name" placeholder='Please select' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="address">Street Address * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="address" placeholder='House number and street name' />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="address" placeholder='Apartment, suite, unit etc. (optional)' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="city_name">Town/City * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="city_name" placeholder='Town/City' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="cou_name">County (optional) <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="cou_name" placeholder='County' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="post_name">Post Code * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' type="text" name="" id="post_name" placeholder='Post Code' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="phone">Phone * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' required type="tel" name="" id="phone" placeholder='Phone' />
        </label> <br />
        <label className='text-base font-dm font-bold text-secondary' htmlFor="email">Email Address * <br />
          <input className='text-sm mb-6 font-normal py-6 border-b border-[#F0F0F0] w-[77%]' required type="email" name="" id="email" placeholder='Email' />
        </label> <br />

        <div className='border-b border-[#F0F0F0] w-[77%] mb-[129px]'>
          <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>Additional Information</h1>
          <p className='font-dm text-base font-bold text-secondary'>Other Notes (optional)</p>
          <p className='font-dm text-sm font-bold text-primary mt-[10px] mb-[86px]'>Notes about your order, e.g. special notes for delivery.</p>
        </div>

        <h1 className='py-[45px] font-bold font-dm text-3xl text-secondary'>Your Order</h1>
        <table class="border-collapse border border-[#F0F0F0] mb-[60px]">
          <tbody>
            <Tabrow thead='Product' tbody='Total' />
            <Tabrow thead='Product name x 1' tbody='389.99 $' />
            <Tabrow thead='Subtotal' tbody='389.99 $' />
            <Tabrow thead='Total' tbody='389.99 $' />
          </tbody>
        </table>

        <div className='border border-[#F0F0F0] w-[900px] h-[349px] mb-[140px] pl-[34px]'>
          <Flex className='mb-5 mt-7'><label className=' text-base font-bold font-dm' htmlFor="bank"><input type="radio" name="" id="bank"  className='mr-[11px]'/>Bank</label></Flex>
          <div className="relative w-[800px] bg-[#F7F8F9] text-gray-700 text-sm p-4 shadow">
            <div className="absolute -top-2 left-4 w-4 h-4 bg-[#F7F8F9] rotate-45 shadow -z-10"></div>
            <p className='font-normal font-dm text-sm text-primary'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
          </div>

          <Flex className='mb-4 mt-7'><label htmlFor="bank2" className=' text-base font-bold text-primary font-dm'><input type="radio" name="" id="bank2" className='mr-[11px]'/>Bank 2</label></Flex>
          <p className='w-[800px] font-normal font-dm text-base text-primary'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className='text-secondary'>privacy policy</a>.</p>

          <Button text='Proceed to Bank' className='mt-[24px] cursor-pointer' />
        </div>
      </Container>
    </section>
  )
}

export default Checkout