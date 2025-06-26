import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import SideberIcon from '../assets/sidebarIcon.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeitem } from '../slices/addtocartSlice'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Sideber = () => {
  let dispatch=useDispatch()
  let [total,setTotal]=useState(0)
  let [showcart,setShowCart]=useState(false)
  let data=useSelector((state)=>state.addtocart.cartItem)

  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }

  let handleDecrement=(item)=>{
    dispatch(decrement(item))
    
  }

  let handleRemoveItem=(item)=>{
    dispatch(removeitem(item))
    
  }
  useEffect(()=>{
    let total=0
    data.map(item=>{
     total+= item.price*item.quantity
     
    })
    setTotal(total);
    

  },[data])



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
                    <ImCross className='text-white my-4 mx-6' onClick={()=>setShowCart(!showcart)}/>
                      <ul className='flex items-center justify-between px-5 py-5 bg-black text-white text-xl font-semibold border border-white'>
                        <li>Action:</li>
                        <li>Product:</li>
                        <li>Price:</li>
                        <li>Quantity:</li>
                        <li>Subtotal:</li>
                      </ul>
                      
                        {
                          data.length>0 
                          ?
                          
                        <>
                         {
                           data.map(item=>(
                            <ul className=' flex items-center justify-between px-5 py-3 bg-black text-white border border-white cursor-pointer'>
                                <li onClick={()=>handleRemoveItem(item)}><ImCross className='text-xs ml-6'/></li>
                                <li>{item.title.substring(0,15)}....</li>
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
                          <div className=" flex items-center mt-20 justify-center gap-x-4">
                            <Link to='/cart'><Button className='bg-white !text-black hover:!text-white hover:!border-white' text="View Cart"/></Link>
                            <Link to='/checkout'><Button className='bg-white !text-black hover:!text-white hover:!border-white' text="Checkout"/></Link>

                          </div>
                        </>
                        
                           :
                           <h1 className='text-white text-2xl font-bold font-dm text-center pt-[200px]'>Cart is Empty</h1>

                        }
                        <div className='absolute bottom-6 right-6 text-white text-2xl font-dm font-bold'>Total :{Math.round(total)}</div>
                     
                  </div> 
                   
                }
                

                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber