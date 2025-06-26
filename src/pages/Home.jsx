import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {

  let [alldata,setAllData]=useState([])

   var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

  useEffect(()=>{

  async function allData(){
      let data= await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products);
    }

    allData()

  },[])


  return (
    <>
    <Banner/>
    <Add/>
    <Container>
      <SubHeading className="pb-10" text='New Arrivals'/>
              <Slider {...settings}>
                {
                  alldata.map(item=>(
                    
                        <div>
                          <Cart src={item.thumbnail} price={item.price} title={item.title}/>
                        </div>
                    

                  ))
                }
              
            </Slider>
     
    </Container>

    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Our Bestsellers'/>
     <Flex className='gap-x-[45px]'>
      {
        alldata.map((item,index)=>(
          (index>4 && index<9) &&
          <Cart src={item.thumbnail} price={item.price} title={item.title}/>
        ))
      }
     </Flex>
    </Container>
    <Container>
       <Image className='mb-[128px]' src={pomotion}/>
    </Container>
    <Container>
      <SubHeading className="pb-10 mt-[118px]" text='Special Offers'/>
          <Flex className='gap-x-[45px]'>
            {
              alldata.map((item,index)=>(
                (index>10 && index<15) &&
                <Cart src={item.thumbnail} price={item.price} title={item.title}/>
              ))
            }
         </Flex>
    </Container>
    </>
    
    
  )
}

export default Home