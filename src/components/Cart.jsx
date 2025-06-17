import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'

import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/addtocartSlice'

const Cart = ({price,src,title}) => {
  let dispatch=useDispatch()

  let handleAddToCart=()=>{
    dispatch(addtocart({
      title:title,
      price:price,
      image:src,
      quantity:1
    }))
    
    
  }
  return (
    <div className='w-[370px] relative group '>
       <div className='relative overflow-hidden'>
       <div className='w-full '>
           <Image className='w-full' src={src}/>
        </div>
        <div className='w-full bg-white opacity-0 group-hover:opacity-100 absolute -bottom-0 left-0 group-hover:bottom-[92px] duration-500 '>

            <ul className='flex flex-col items-end py-6 px-8 gap-y-4 cursor-pointer'>
                <li >Add to Wish List<FaHeart className='inline text-sm ml-4'/></li>
                <li >Compare<FaCodeCompare className='inline text-sm ml-4'/></li>
                <li onClick={handleAddToCart}>Add to Cart <FaShoppingCart className='inline text-sm ml-4'/></li>
            </ul>
        </div>
        <Flex className='justify-between items-center pt-6 pb-4'>
            <h4 className='text-xl text-secondary font-dm font-bold'>{title}</h4>
            <p className='text-base text-primary font-dm font-normal'>{price}</p>
        </Flex>
        <p className='text-base text-primary font-dm font-normal'>Black</p>

        <button className='py-2 px-8 bg-black text-white text-sm font-bold font-dm absolute top-5 left-5'>New</button>
       </div>
    </div>
  )
}

export default Cart