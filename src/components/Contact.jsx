import React, { useState } from "react";
// import Contact from './Contact';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Contact for Whole supply</h1>
        <p className="text-gray-700 text-center mb-6">
          We would love to be in touch with you! Please sign up to receive emails from us!
        </p>
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">
              Submission Successful!
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-black  font-medium">Name</label>
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Mr./Mrs./Ms."
                  className="w-full lg:w-1/4 p-3 bg-white text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white text-black lg:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white text-black lg:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            {/* Email Input */}
            <div>
              <label className="block text-black font-medium">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-black p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>
            {/* Phone Input */}
            <div>
              <label className="block text-black font-medium">Phone</label>
              <input
                type="tel"
                placeholder="(000) 000-0000"
                className="w-full bg-white text-black p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            {/* Address Input */}
            <div>
              <label className="block text-black font-medium">Address</label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 bg-white text-black border rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Street Address Line 2"
                className="w-full p-3 bg-white text-black border rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <div className="flex mb-3 flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full  bg-white text-black lg:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="State / Province"
                  className="w-full bg-white text-black lg:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <input
                type="text"
                placeholder="Postal / Zip Code"
                className="w-full p-3 bg-white text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            {/* Comments Input */}
            <div>
              <label className="block mb-3 text-black font-medium">
                Please write the book name that you need...
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3  bg-white text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
