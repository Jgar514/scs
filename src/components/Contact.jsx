// src/components/Contact.jsx
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-12">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">Get in touch with us for any queries or support.</p>
          </div>
        </div>
      </section>
      <div>
        {/* Contact Form */}
        <ContactForm />
      </div>
      {/* Contact Information Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row ">
            <div className=' w-full md:w-1/2 flex justify-center items-center flex-col '>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Office</h3>
              <p className="text-gray-600 mb-4">
                1234 Main Street<br />
                Anytown, USA<br />
                Phone: (123) 456-7890<br />
                Email: info@yourcompany.com
              </p>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col'>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
