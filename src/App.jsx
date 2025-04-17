import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/product" element={<Product />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
    <Route path="/*" element={<Error />}></Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App