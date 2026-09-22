import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx';
import Hero from '../components/hero/Hero.jsx';
import OverViewCounter from '../components/OverviewCounter/OverViewCounter.jsx';
import Banner from '../components/banner/Banner.jsx';
import Banner2 from '../components/banner/Banner2.jsx';
import Videobanner from "../components/videoBanner/Videobanner.jsx";
import Blogs from '../components/blogs/Blogs.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SlideBar from '../components/slider/SlideBar.jsx';
import Banner3 from '../components/banner/Banner3.jsx';
import Banner4 from '../components/banner/Banner4.jsx';
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
