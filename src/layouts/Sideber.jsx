import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideberIcon from '../assets/sidebarIcon.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/addtocartSlice'

const Sideber = () => {
  let dispatch=useDispatch()
  let [showcart,setShowCart]=useState(false)
  let data=useSelector((state)=>state.addtocart.cartItem)

  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }

  let handleDecrement=(item)=>{
    dispatch(decrement(item))
    
  }
 
  
 
  

  

  return (
    <section className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12 '>
                <Flex className='gap-x-2.5 items-center'>
                    <Image src={SideberIcon}/>
                    <p className='text-sm text-secondary font-normal font-dm'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-8/12 relative'>
                   <input className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4]' type="text" placeholder='Search Products.....'/>
                   <IoSearchSharp  className='absolute top-1/2 -translate-y-1/2 right-6'/>

                </div>
                <div className='w-4/12'>
                <Flex className='justify-end'>
                        <FaUser />
                        <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                        <FaShoppingCart onClick={()=>setShowCart(!showcart)}/>
                </Flex>

                {
                  showcart && <div className='w-1/3 h-screen bg-black absolute top-0 right-0 z-10'>
                    <FaShoppingCart className='text-white' onClick={()=>setShowCart(!showcart)}/>
                      <ul className='flex items-center justify-between px-5 py-3 bg-black text-white border border-white'>
                        <li>Product:</li>
                        <li>Price:</li>
                        <li>Quantity:</li>
                        <li>Subtotal:</li>
                      </ul>
                      
                        {
                          data.map(item=>(
                            <ul className='flex items-center justify-between px-5 py-3 bg-black text-white border border-white cursor-pointer'>
                                <li>{item.title}</li>
                                <li>{item.price}$</li>
                                <li className='border border-white py-2 px-8 flex gap-x-3'>
                                  <span onClick={()=>handleDecrement(item)}>-</span>
                                  <span>{item.quantity}</span>
                                  <span onClick={()=>handleIncrement(item)}>+</span>
                                </li>
                                <li>{item.price*item.quantity}</li>
                            </ul>
                          ))
                        }
                     
                  </div> 
                   
                }
                

                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber