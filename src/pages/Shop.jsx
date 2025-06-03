import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Image from '../components/Image'
import Icon1 from '../assets/pageIcon1.png'
import Icon2 from '../assets/pageIcon2.png'

const Shop = () => {
  let [design,setDesign]=useState(true)
  let [store,setStore]=useState(12)
  let handleDesign=()=>{
    setDesign(!design)
    
  }

  let handleChange=(e)=>{
    setStore(e.target.value);
    

  }
  console.log(store);
  
  return (
  <section className='py-[126px]'>
   <Container>
      <Flex>
         <div className='w-3/12'>Shop by Category</div>
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