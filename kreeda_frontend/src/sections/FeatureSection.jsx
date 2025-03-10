import React from 'react';
import '../stylesheets/FeatureSection.css'; // CSS for styling the layout
import FeatureCard from '../components/FeatureCard'; // Import the card component
import image1 from '../assets/feature1.png'; // Import for 1st box (Studio Workouts)
import image2 from '../assets/feature2.png'; // Import for 2nd box (Personalization at ease)
import image3 from '../assets/feature3.png'; // Import for large box (Best workouts for you)
import image4 from '../assets/feature4.png'; // Import for 4th box (Home Workouts)
import image5 from '../assets/feature5.png'; // Import for 5th box (Live exercises)

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className = "container">
        <h2 className="features-heading">Features</h2>
        <h3 className="features-subheading">
          Experience seamless integration, enhanced performance, and user-friendly design with our cutting-edge features.
        </h3>
        <div className="features-container">
          {/* Left column - two small boxes */}
          <div className="column column-left">
            <FeatureCard image={image1} title="Studio Workouts" imageHeight="150px" />
            <FeatureCard image={image2} title="Personalization at ease" imageHeight="85px" />
          </div>

          {/* Center column - one large box */}
          <div className="column column-center">
            <FeatureCard
              image={image3}
              title="Best workouts for you"
              description="You will have everything you need to reach your personal fitness goals - for free"
              button="JOIN NOW"
              isLarge={true}
              imageHeight="250px"
            />
          </div>

          {/* Right column - two small boxes */}
          <div className="column column-right">
            <FeatureCard image={image4} title="Home Workouts" imageHeight="75px" />
            <FeatureCard
              image={image5}
              title="Unlimited access to"
              description="Live exercises"
              splitText={true} // Splits text above and below the image
              imageHeight="50px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
