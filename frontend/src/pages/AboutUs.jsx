import React from "react";
import { Heart, Users, Award, Target, BookOpen, Handshake } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
// import logo from "../assets/front_image.jpg";
import AboutUsHero from "../components/hero/AboutUsHero";
import Story from "../components/story/Story";
import Footer from "../components/Footer/Footer";
import AboutOverview from "../components/OverviewCounter/AboutOverview";
import Values from "../components/ourvision/Values";
import AboutUsContacts from "../components/contacts/AboutUsContacts";
import AboutusBanner from "../components/banner/AboutusBanner";
import Mother from "../components/speech/Mother";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <AboutUsHero />

      <AboutusBanner/>

      {/* Mother speetch */}
      <Mother/>

      {/* Statistics Section */}
      <AboutOverview />

      {/* Our Story Section */}
      <Story />

      {/* Values Section */}
      <Values></Values>

      {/* Call to Action */}
      <AboutUsContacts />

      {/* <Footer/> */}
      <Footer/>
    </div>
  );
};

export default AboutUs;
