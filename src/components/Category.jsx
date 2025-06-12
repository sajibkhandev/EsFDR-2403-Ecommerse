import React, { useState } from 'react'
import Flex from './Flex'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFunction } from '../slices/categorySlice'

const Category = ({text,type}) => {
  console.log(type);
  
     let dispatch=useDispatch()
     let category=useSelector((state)=>state.category.value)

      let handleMinus=()=>{
      dispatch(categoryFunction(false))
     }
      let handlePlus=()=>{
      dispatch(categoryFunction(true))
     }
  return (
    <Flex className='items-center justify-between border-b border-[#F0F0F0] py-5'>
              <p className='text-base text-primary font-dm font-normal'>{text}</p>
             {
              type=="true" ?  
                  category ?
                  <FiMinus onClick={handleMinus}  className='text-base text-primary font-dm font-normal'/>
                  :
                  <FiPlus onClick={handlePlus}  className='text-base text-primary font-dm font-normal'/>  
                :""
             }
              
             
           </Flex>
  )
}

export default Category