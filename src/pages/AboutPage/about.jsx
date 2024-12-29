import React from "react";
import "./about.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="heroSection">
        <h1>About Us</h1>
        <p>Your trusted partner in finding your dream property.</p>
      </div>
      <div className="content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            We aim to bridge the gap between property seekers and owners through innovative tools, personalized services, and a seamless user experience.
          </p><hr /><br />
        </section>
        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="featuresGrid">
            <div className="feature">
              <img src="/listing.png" alt="Extensive Listings" />
              <h3>Extensive Listings</h3>
              <p>We offer diverse properties across multiple locations.</p>
            </div>
            <div className="feature">
              <img src="/guidance.png" alt="Expert Guidance" />
              <h3>Expert Guidance</h3>
              <p>Get professional advice and insights from our experienced agents.</p>
            </div>
            <div className="feature">
              <img src="/tools.png" alt="User-Friendly Tools" />
              <h3>User-Friendly Tools</h3>
              <p>Our platform is designed to make property searching easy and efficient.</p>
            </div>
            <div className="feature">
              <img src="/support.png" alt="Customer Support" />
              <h3>Customer Support</h3>
              <p>Our team is always ready to assist you.</p>
            </div>
          </div><hr /><br />
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To create a real estate ecosystem that fosters trust, innovation, and accessibility for everyone.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
