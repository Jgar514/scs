import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Services</h2>

        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 1</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris eget urna efficitur, at porta
            nulla vestibulum. Sed euismod dolor et lorem efficitur bibendum.
          </p>
          <p className="text-gray-600 mb-4">
            Donec ullamcorper venenatis purus nec efficitur. Integer auctor orci nec lacus fermentum, et faucibus erat
            aliquet. Proin sagittis mauris eget urna efficitur, at porta nulla vestibulum. Sed euismod dolor et lorem
            efficitur bibendum.
          </p>
          <div className="flex justify-end">
            <Link to="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 2</h3>
          <p className="text-gray-600 mb-4">
            Fusce vel ante nec neque interdum efficitur. Phasellus ac elit sagittis, fermentum lectus in, pretium ligula.
            Nam accumsan, quam et consequat varius, nisl leo molestie dui, eget volutpat nunc leo sit amet ipsum.
          </p>
          <p className="text-gray-600 mb-4">
            Nam accumsan, quam et consequat varius, nisl leo molestie dui, eget volutpat nunc leo sit amet ipsum. Fusce
            vel ante nec neque interdum efficitur. Phasellus ac elit sagittis, fermentum lectus in, pretium ligula.
          </p>
          <div className="flex justify-end">
            <Link to="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 3</h3>
          <p className="text-gray-600 mb-4">
            Integer auctor orci nec lacus fermentum, et faucibus erat aliquet. Proin sagittis mauris eget urna efficitur,
            at porta nulla vestibulum. Sed euismod dolor et lorem efficitur bibendum.
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris eget urna efficitur, at porta
            nulla vestibulum. Sed euismod dolor et lorem efficitur bibendum.
          </p>
          <div className="flex justify-end">
            <Link to="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
