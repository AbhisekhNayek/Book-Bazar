import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import banner from "../../public/Banner.png";


const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 m-10">
        About Us
      </h1>

      <div className="flex justify-center mt-10">
        <img 
          src={banner} 
          alt="Our Team" 
          className="rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2"
        />
      </div>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to our platform! We are dedicated to providing top-notch services and innovative solutions that meet your needs.
        Our mission is to empower users with cutting-edge technology and unparalleled support.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our team consists of experienced professionals passionate about making a difference. 
        We continuously strive to enhance our platform to ensure you achieve your goals seamlessly.
      </p>
      
    </div>

    <Footer/>
    
    </>
  );
};

export default About;
