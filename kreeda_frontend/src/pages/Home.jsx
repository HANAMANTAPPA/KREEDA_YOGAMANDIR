import React from 'react';
import Navbar from '../sections/Navbar';
import Herosection from '../sections/Herosection';
import PremiumPlans from '../sections/PremiumPlans';
import SmartFitnessSection from '../sections/SmartFitnessSection';
import FeaturesSection from '../sections/FeatureSection';
import AIcenter from '../sections/ai-center/AIcenter';
import AIhome from '../sections/ai-home/AIhome';
import ContactForm from '../sections/ContactForm/ContactForm';
import Faq from '../sections/Faq/Faq';

const Home = () => {
  return (
    <div style={{maxWidth: "100vw",overflowX:"hidden"}}>
      <Herosection />
      {/* <PremiumPlans /> */}
      <SmartFitnessSection />
      <FeaturesSection />
      <AIcenter />
      <AIhome />
      <Faq />
      <ContactForm />
    </div>
  );
};

export default Home;