import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'

import { FaStar } from "react-icons/fa";
import Button from '../components/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/addtocartSlice'


const Product = () => {
  let dispatch=useDispatch()
  let [alldata, setAllData] = useState([])
  let [product, setProduct] = useState([])
  let singleProduct = useParams()

  let data=useSelector((state)=>state.addtocart.cartItem)

  useEffect(() => {

    async function allData() {
      let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products);
    }
    allData()

  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })

  }, [])





  return (
    <section className='py-[150px]'>
      <Container>
        {
          alldata.map(item => {
            if (item.title == singleProduct.title) {

              return (
                <>
                  <Image src={item.thumbnail} />
                  <SubHeading className='pt-12 pb-4' text={item.title} />

                  <Flex className='gap-x-6 items-center'>
                    <ul className='flex gap-x-[2px]'>
                      <li><FaStar className='text-[#FFD881] text-sm' /></li>
                      <li><FaStar className='text-[#FFD881] text-sm' /></li>
                      <li><FaStar className='text-[#FFD881] text-sm' /></li>
                      <li><FaStar className='text-[#FFD881] text-sm' /></li>
                      <li><FaStar className='text-[#FFD881] text-sm' /></li>
                    </ul>
                    <p className='text-sm text-primary font-dm font-normal'>1 Review</p>
                  </Flex>
                  <Flex className='items-center gap-x-[22px] py-6 border-b border-[#F0F0F0] w-w49'>
                    <del className='text-primary'><p className='text-base text-primary font-normal font-dm'>$88.00</p></del>
                    <p className='text-xl text-secondary font-bold font-dm'>${item.price}</p>
                  </Flex>

                  <Flex className='items-center gap-x-[53px] pt-8'>
                    <h4 className='text-base text-secondary font-dm font-bold'>COLOR:</h4>
                    <ul className='flex gap-x-[15px]'>
                      <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#979797]'></li>
                      <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-[#FF8686]'></li>
                      <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-red-500'></li>
                      <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-green-500'></li>
                      <li className='w-[20px] h-[20px] rounded-full hover:scale-[1.5] duration-300 bg-red-500'></li>
                    </ul>
                  </Flex>
                  <Flex className='items-center gap-x-[80px] pt-8'>
                    <h4 className='text-base text-secondary font-dm font-bold'>SIZE:</h4>
                    <select className='py-2 px-12 border border-[#F0F0F0]'>
                      <option value="">S</option>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">Xl</option>
                    </select>

                  </Flex>
                  <Flex className='items-center gap-x-[37px] pt-8 border-b border-[#F0F0F0] w-w49 pb-[30px]'>
                    <h4 className='text-base text-secondary font-dm font-bold'>QUANTITY:</h4>
                    <div className='py-2 px-8 border border-[#F0F0F0] flex gap-x-5'>
                     {
                      data.map(item=>(
                        <>
                         <span onClick={()=>dispatch(increment(item))}>+</span>
                      <span>{item.quantity}</span>
                      <span onClick={()=>dispatch(decrement(item))}>-</span>
                        </>
                      ))
                     }
                    </div>
                  </Flex>


                  <Flex className='items-center gap-x-[37px] py-8 border-b border-[#F0F0F0] w-w49'>
                    <h4 className='text-base text-secondary font-dm font-bold'>STATUS:</h4>
                    <h5 className='text-base text-primary font-dm font-normal'>In stock</h5>


                  </Flex>

                  <Flex className='gap-x-[20px] py-8 border-b border-[#F0F0F0] w-w49'>
                    <Button text="Add to Wish List" />
                    <Button text="Add to Cart" />
                  </Flex>


                  <Flex className='justify-between py-8 border-b border-[#F0F0F0] w-w49'>
                    <h4 className='text-base text-secondary font-dm font-bold'>FEATURES & DETAILS</h4>
                    <p className='text-secondary text-lg font-bold'>+</p>
                  </Flex>
                  <Flex className='justify-between py-8 border-b border-[#F0F0F0] w-w49'>
                    <h4 className='text-base text-secondary font-dm font-bold'>SHIPPING & RETURNS</h4>
                    <p className='text-secondary text-lg font-bold'>+</p>
                  </Flex>


                  <div className='py-8  w-w49'>
                    <p className='text-primary text-base font-dm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>

                  <Flex className='gap-x-[62px] '>
                    <h4 className='text-xl text-primary font-dm font-normal'>Description</h4>
                    <h4 className='text-xl text-secondary font-dm font-bold'>Reviews (1)</h4>
                  </Flex>
                  <p className='text-primary text-base font-dm font-normal py-8 border-b border-[#F0F0F0] w-full'>1 review for Product</p>


                  <Flex className='justify-between items-center pt-6'>
                    <Flex className='gap-x-[37px] items-center'>
                      <p className='text-sm text-primary font-dm font-normal'>John Ford</p>
                      <ul className='flex gap-x-[2px]'>
                        <li><FaStar className='text-[#FFD881] text-sm' /></li>
                        <li><FaStar className='text-[#FFD881] text-sm' /></li>
                        <li><FaStar className='text-[#FFD881] text-sm' /></li>
                        <li><FaStar className='text-[#FFD881] text-sm' /></li>
                        <li><FaStar className='text-[#FFD881] text-sm' /></li>
                      </ul>
                    </Flex>
                    <p>6 months ago</p>
                  </Flex>
                  <p className='text-primary text-base font-dm font-normal py-8 border-b border-[#F0F0F0] w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>


                  <h4 className='text-xl text-secondary font-dm font-bold py-12'>Add a Review</h4>

                  <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
                    <input className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='Your name here' />
                  </label>
                  <br />
                  <label className='text-base text-secondary font-dm font-bold ' htmlFor="name">Email <br />
                    <input className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='Your email here' />
                  </label>
                  <br />
                  <label className='text-base text-secondary font-dm font-bold ' htmlFor="name">Review <br />
                    <textarea className='py-6 mb-6 w-w49 border-b border-[#F0F0F0]' id="name" type="text" placeholder='Your review here' />
                  </label>
                  <br />
                  <Button text="Post" />
                </>
              )
            }
          })
        }


      </Container>
    </section>
  )
}

export default Product