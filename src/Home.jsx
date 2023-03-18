import HeroSection from './Component/HeroSection'
import { useGlobalContext } from './Context';
import React, { useEffect } from 'react';
import Services from './Services';
import Contact from './Contact';



  const Home = () => {
    const { updateHomePage } = useGlobalContext();
  
    useEffect(() => updateHomePage(), []);
  return (
    <>
    <HeroSection />
    
    <Services/>
    <Contact/>
    </>
  )
}

export default Home