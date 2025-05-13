import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({className, style, onClick}) => {
  return (
     <div
      className={`${className} absolute top-[40%] left-0 z-10 -translate-y-1/2 bg-[#979797] w-[64px] h-[64px] rounded-full flex items-center justify-center`}
     
      onClick={onClick}
    >

<FaLongArrowAltLeft className='text-white'/>

        
    </div>
  )
}

export default PrevArrow