import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Add1 from '../assets/ad1.jpg'
import Add2 from '../assets/ad2.jpg'
import Add3 from '../assets/ad3.jpg'

const Add = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex className='justify-between'>
                <div className='w-[48%]'>
                <Image className='w-full' src={Add1}/>
                </div>
                <div className='w-[48%]'>
                <Image className='w-full pb-10' src={Add2}/>
                <Image className='w-full' src={Add3}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Add