import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArrow = ({className, style, onClick}) => {
    
    
  return (
     <div
      className={`${className} absolute top-[40%] right-8 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-[#979797] flex items-center justify-center`}
      onClick={onClick}
    > 
       <FaLongArrowAltRight className='text-white'/>

    </div>
  )
}

export default NextArrow