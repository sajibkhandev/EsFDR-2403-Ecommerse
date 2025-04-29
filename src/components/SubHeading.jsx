import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <h2 className={`text-f39 text-secondary font-dm font-bold ${className}`}>{text}</h2>
  )
}

export default SubHeading