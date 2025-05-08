import React from 'react'

const AboutCart = ({title,text}) => {
  return (
    <div>
        <h5 className='text-[25px] text-secondary font-dm font-bold pb-3'>{title}</h5>
        <p className='text-base text-primary font-dm font-normal w-[506px]'>{text}</p>
    </div>
  )
}

export default AboutCart