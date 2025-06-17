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


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'


const Home = () => {
   var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };


  return (
    <>
    <Banner/>
    <Add/>
    <Container>
      <SubHeading className="pb-10" text='New Arrivals'/>
              <Slider {...settings}>

                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='10$' title="Product Two"/>
                </div>
                <div>
                  <Cart src={Product2} price='40$' title="Product Three"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product Four"/>
                </div>
                <div>
                  <Cart src={Product2} price='70$' title="Product Five"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product Six"/>
                </div>
              
            </Slider>
     
    </Container>

    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Our Bestsellers'/>
      <Slider {...settings}>

                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
              
            </Slider>
    </Container>
    <Container>
       <Image className='mb-[128px]' src={pomotion}/>
    </Container>
    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Special Offers'/>
      <Slider {...settings}>

                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product2} price='30$' title="Product One"/>
                </div>
                <div>
                  <Cart src={Product} price='30$' title="Product One"/>
                </div>
              
            </Slider>
    </Container>
    </>
    
    
  )
}

export default Home