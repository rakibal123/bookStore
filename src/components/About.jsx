import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      {/* Upper Half */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 px-6 md:px-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mr-12">
          <img
            src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="w-full text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold  mb-4">About Us</h1>
          <p className="text-amber-50 text-base md:text-lg mb-6">
            We believe in creating something extraordinary. Our mission is to
            inspire, innovate, and impact. Join us in our journey to make the
            world a better place through creativity and technology.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Lower Half */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {/* Column 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-base">
              From a small idea to a global impact, our journey has been one of
              passion, growth, and purpose.
            </p>
          </div>
          {/* Column 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-base">
              Innovating solutions that inspire and empower individuals and
              communities around the world.
            </p>
          </div>
          {/* Column 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-base">
              A future where creativity and technology merge to solve the
              world’s biggest challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
