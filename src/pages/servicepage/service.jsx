import React from "react";
import "./service.scss";

function ServicesPage() {
  return (
    <div className="servicesPage">
      <div className="heroSection">
        <h1>Our Services</h1>
        <p>Comprehensive real estate services tailored to your needs.</p>
      </div>
      <div className="servicesContent">
        <div className="service">
          <img src="/buy.png" alt="Property Buying" />
          <h2>Property Buying</h2>
          <p>
            Explore our database of properties to find the perfect one for you.
          </p>
        </div>
        <div className="service">
          <img src="/sell.png" alt="Property Selling" />
          <h2>Property Selling</h2>
          <p>
            Get the best price for your property with our marketing expertise.
          </p>
        </div>
        <div className="service">
          <img src="/rent.png" alt="Rental Services" />
          <h2>Rental Services</h2>
          <p>
            Hassle-free renting solutions for residential and commercial spaces.
          </p>
        </div>
        <div className="service">
          <img src="/consultation.png" alt="Consultation" />
          <h2>Consultation</h2>
          <p>
            Expert advice on property valuation, legal processes, and investments.
          </p>
        </div>
        <div className="service">
          <img src="/management.png" alt="Property Management" />
          <h2>Property Management</h2>
          <p>
            Professional management of your property, from maintenance to tenant relations.
          </p>
        </div>
        <div className="service">
          <img src="/virtual.png" alt="Virtual Tours" />
          <h2>Virtual Tours</h2>
          <p>
            Experience properties online with immersive virtual tours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
