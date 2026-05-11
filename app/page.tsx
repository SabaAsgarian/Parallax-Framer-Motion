"use client";



import Header from './components/header';
import Footer from './components/footer';
import HeroSection from './components/herosection1';
import FeaturesSection from './components/featuressection2';
import StrongerParallaxShowcaseSection from './components/strongerParallaxShowcaseSection3';
import ServiceSction from './components/servicesSection4'
import ProcessTimelineSection from './components/processTimelineSection5'
import GallerySection from './components/gallerySection6'
import PricingSection from './components/pricingSection7'
import FAQTechStackSection from './components/faqtechStackSection8'
import FramerMotionPlaygroundSection from './components/framerMotionPlaygroundSection9'
import AdvancedMotionLab from './components/advancedMotionLab10'

import Fram from './components/framerMotion'
const Page: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#050816] text-white'>
    
     
        <Header/>
        <HeroSection/>
        <FeaturesSection/>
        <StrongerParallaxShowcaseSection/>
        <ServiceSction/>
        <ProcessTimelineSection/>
        <GallerySection/>
        <PricingSection/>
        <FAQTechStackSection/>
        <FramerMotionPlaygroundSection/>
        <AdvancedMotionLab/>
        <Footer/>
        {/* <Fram/> */}

       
     
    </div>
  );
}
export default Page;