import React from "react";
import { Heart, Users, Award, Target, BookOpen, Handshake } from "lucide-react";
import Navbar from "../components/navbar/Navbar.jsx";
import AboutUsHero from "../components/hero/AboutUsHero.jsx";
import Story from "../components/story/Story.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutOverview from "../components/OverviewCounter/AboutOverview.jsx";
import Values from "../components/ourvision/Values.jsx";
import AboutUsContacts from "../components/contacts/AboutUsContacts.jsx";
import AboutusBanner from "../components/banner/AboutusBanner.jsx";
import Mother from "../components/speech/Mother.jsx";
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
