import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Image from '../components/Image'
import Icon1 from '../assets/pageIcon1.png'
import Icon2 from '../assets/pageIcon2.png'
import Category from '../components/Category'
import { FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import SubCategory from '../components/SubCategory'


const Shop = () => {
  let [design,setDesign]=useState(true)
  let [store,setStore]=useState(12)
  let category=useSelector((state)=>state.category.value)
  let handleDesign=()=>{
    setDesign(!design)
    
  }
  let handleChange=(e)=>{
    setStore(e.target.value);
  }

  
  return (
  <section className='py-[126px]'>
   <Container>
      <Flex>
         <div className='w-3/12 pr-10'>
            <h5 className='text-xl text-secondary font-dm font-bold pb-[15px]'>Shop by Category</h5>

           <Category text="Phone" type="true"/>
                 {
                  category &&  <>
                  <SubCategory text="realme"/>
                  <SubCategory text="sumsong"/>
                  <SubCategory text="iphone"/>
                  <SubCategory text="techno"/>
                  <SubCategory text="vivo"/>
                  </>
                 }

           <Category text="Desktop" type="false"/>
                 {
                  category &&  <>
                  <SubCategory text="Asus"/>
                  <SubCategory text="dell"/>
                  <SubCategory text="lg"/>
                  
                  </>
                 }
           <Category text="Watch" type="true"/>
                 {
                  category &&  <>
                  <SubCategory text="Asus"/>
                  <SubCategory text="dell"/>
                  <SubCategory text="lg"/>
                  
                  </>
                 }
           <Category text="Tablet" type="false"/>
                 {
                  category &&  <>
                  <SubCategory text="Asus"/>
                  <SubCategory text="dell"/>
                  <SubCategory text="lg"/>
                  
                  </>
                 }
           <Category text="Leptop" type="true"/>
                 {
                  category &&  <>
                  <SubCategory text="Asus"/>
                  <SubCategory text="dell"/>
                  <SubCategory text="lg"/>
                  
                  </>
                 }
          
              
           

         </div>
        <div className='w-9/12'>

         <Flex className='justify-between pb-[60px]'>
                    
                       <Flex className='gap-x-5'>
                              <div onClick={handleDesign}>
                                <Image src={Icon1}/>
                              </div>
                              <div onClick={handleDesign}>
                                <Image src={Icon2}/>
                              </div>
                      </Flex>
                     

                      <Flex className='gap-x-[14px] items-center ml-[700px]'>
                          <p>Sort by:</p>
                          <select className='border border-[#F0F0F0] py-2 px-5'>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">green</option>
                          </select>
                      </Flex>

                      <Flex className='gap-x-[14px] items-center'>
                          <p>Show:</p>
                          <select onChange={handleChange} className='border border-[#F0F0F0] py-2 px-5'>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                          </select>
                      </Flex>
          
         </Flex>



        {
          design 
          ? 
            <Pagination itemsPerPage={12} />
          :
          <p>you have to make a new design</p>
        }
        </div>
      </Flex>

   </Container>
   
  </section>
  )
}

export default Shop