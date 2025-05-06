import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-sm text-primary font-normal font-dm list-none hover:text-secondary  duration-500 cursor-pointer ${className}`}>{text}</li>
  )
}

export default List