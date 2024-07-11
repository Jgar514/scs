import React from 'react';
import user from '../assets/user.png';
import aid from '../assets/aid.png'; // Make sure you have this image in your assets folder

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          </div>
          <div className="flex justify-center">
            <img src={aid} alt="About Us" className="w-full h-auto sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-2xl rounded-lg shadow-lg" />
          </div>
          <div className="text-center mb-0 pt-4">
            <p className="mt-4 text-lg text-gray-600">
              Our company was founded with the vision of creating innovative solutions that empower businesses and individuals.
              Over the years, we have grown into a trusted partner for many clients, thanks to our commitment to quality and customer satisfaction.
              Our team of experts brings together a wealth of experience and knowledge, enabling us to tackle even the most challenging projects with confidence.
              We believe in continuous improvement and are always exploring new ways to enhance our services and deliver greater value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">Meet the talented individuals behind our success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Employee Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center ">
                <img src={user} alt="Employee" className="h-40 w-40 rounded-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>

            {/* Employee Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src={user} alt="Employee" className="h-40 w-40 rounded-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>

            {/* Employee Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src={user} alt="Employee" className="h-40 w-40 rounded-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-900">Alice Johnson</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
