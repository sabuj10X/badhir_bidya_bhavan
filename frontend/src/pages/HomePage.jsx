import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero.jsx';
import OverViewCounter from '../components/Overviewcounter/OverViewCounter.jsx';
import Banner from '../components/banner/Banner.jsx';
import Banner2 from '../components/banner/Banner2';
import Videobanner from "../components/videoBanner/Videobanner";
import Blogs from '../components/blogs/Blogs';
import Footer from '../components/Footer/Footer';
import SlideBar from '../components/slider/SlideBar';
import Banner3 from '../components/banner/Banner3';
import Banner4 from '../components/banner/Banner4';
const HomePage = () => {
  return (
     <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Navbar/>
        <Hero/>
        <OverViewCounter/>
        <SlideBar/>
        <Banner2/>
        <Banner/>
        <Banner3/>
        <Banner4/>
        <Videobanner/>
        <Blogs/>
        <Footer/>
      </main>
    </>
  )
}

export default HomePage
