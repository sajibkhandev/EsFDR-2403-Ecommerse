import React from 'react'
import Banner from '../layouts/Banner'
import Add from '../layouts/Add'
import Container from '../components/Container'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
    <Banner/>
    <Add/>
    <Container>
      <Cart/>
    </Container>
    </>
    
    
  )
}

export default Home