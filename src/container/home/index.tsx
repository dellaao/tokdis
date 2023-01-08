import React from 'react'
import Footer from '../../component/footer';
import LandingPage from '../../component/landing-page';
import Navbar from '../../component/navbar'
import Product from '../../component/product';
import './styles.css'

export const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage/>
      <Product/>
      <Footer/>
    </>
  );
}

export default Home
