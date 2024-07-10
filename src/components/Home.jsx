// src/components/Home.jsx
import React from 'react';
import heroImage from '../assets/hero.png'; // Import the hero.png image

const Home = () => {
  return (
    <div>
      {/* Hero section with imported image */}
      <div className="relative flex justify-end bg-yellow-100 items-end h-[600px] md:h-screen pt-4">
        <img
          src={heroImage} // Use the imported image
          alt="Hero Image"
          className="absolute inset-0 object-cover w-full h-full md:h-full  "
        />
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start text-white text-center  ">
          <div className="h-3/6 lg:w-1/2 w-full  px-4 ml-0 pb-6 items-center justify-start flex flex-col ">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
            <p className="text-lg mb-8">This is the home page content.</p>
            <a
              href="#services"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div id="services" className="py-20 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Service 1</h3>
              <p className="text-gray-700">
                Description of Service 1 goes here.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Service 2</h3>
              <p className="text-gray-700">
                Description of Service 2 goes here.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Service 3</h3>
              <p className="text-gray-700">
                Description of Service 3 goes here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other sections */}
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
