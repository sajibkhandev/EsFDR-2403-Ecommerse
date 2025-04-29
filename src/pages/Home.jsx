import React from 'react'
import Banner from '../layouts/Banner'
import Add from '../layouts/Add'
import Container from '../components/Container'
import Cart from '../components/Cart'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Product from '../assets/product.png'
import Product2 from '../assets/product2.png'
import pomotion from '../assets/pomotion.png'

const Home = () => {
  return (
    <>
    <Banner/>
    <Add/>
    <Container>
      <SubHeading className="pb-10" text='New Arrivals'/>
      <Flex className='justify-between'>
            <Cart src={Product} price='30$' title="Product One"/>
            <Cart src={Product2} price='20$' title="Product Two"/>
            <Cart src={Product} price='50$' title="Product Three"/>
            <Cart src={Product2} price='20$' title="Product Four"/>
      </Flex>
    </Container>

    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Our Bestsellers'/>
      <Flex className='justify-between mb-[130px]'>
            <Cart src={Product2} price='30$' title="Product One"/>
            <Cart src={Product} price='20$' title="Product Two"/>
            <Cart src={Product2} price='50$' title="Product Three"/>
            <Cart src={Product} price='20$' title="Product Four"/>
      </Flex>
    </Container>
    <Container>
       <Image className='mb-[128px]' src={pomotion}/>
    </Container>
    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Special Offers'/>
      <Flex className='justify-between mb-[130px]'>
            <Cart src={Product2} price='30$' title="Product One"/>
            <Cart src={Product} price='20$' title="Product Two"/>
            <Cart src={Product2} price='50$' title="Product Three"/>
            <Cart src={Product} price='20$' title="Product Four"/>
      </Flex>
    </Container>
    </>
    
    
  )
}

export default Home