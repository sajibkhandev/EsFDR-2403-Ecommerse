import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideberIcon from '../assets/sidebarIcon.png'
import { IoSearchSharp } from 'react-icons/io5'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

const Sideber = () => {
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
                        <FaShoppingCart/>
                </Flex>



                
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber