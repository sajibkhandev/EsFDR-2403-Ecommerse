import React from 'react'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerOne from '../assets/banner1.jpg'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refres from '../assets/refres.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='border-b border-[#F0F0F0]'>
       <Link to='/contact'><Image className='w-full' src={BannerOne}/></Link>
       <Container>
       <Flex className='justify-between'>
          <Flex className='items-center gap-x-4 py-[30px]'>
                  <Image src={Two}/>
                  <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
            </Flex>
            <Flex className='items-center gap-x-4 py-[30px]'>
                  <Image src={Car}/>
                  <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
            </Flex>
            <Flex className='items-center gap-x-4 py-[30px]'>
                  <Image src={Refres}/>
                  <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
            </Flex>
       </Flex>

       </Container>
    </section>
  )
}

export default Banner