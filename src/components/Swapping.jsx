import React, { useState } from "react";
import emailjs from "emailjs-com";

const Swapping = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    yourBook: "",
    bookCondition: "",
    desiredBook: "",
    description: "",
    picture: null,
  });

  const [picturePreview, setPicturePreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, picture: file });
    setPicturePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      yourBook: formData.yourBook,
      bookCondition: formData.bookCondition,
      desiredBook: formData.desiredBook,
      description: formData.description,
    };

    emailjs
    .send(
        "service_0cxeg8m",
        "template_i5xt9sy",
        emailData,
        "KzNiyMSW34DySVEX4"
      )
      .then(
        () => {
          setShowPopup(true); // Show the pop-up on success
          setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
          setFormData({
            name: "",
            address: "",
            phone: "",
            yourBook: "",
            bookCondition: "",
            desiredBook: "",
            description: "",
            picture: null,
          });
          setPicturePreview(null);
        },
        (error) => {
          alert("Submission failed. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center px-4">
      {/* Pop-Up Box */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
            <h3 className="text-2xl font-bold text-purple-600">Thank You!</h3>
            <p className="mt-3 text-gray-700">
              Your book swap request has been successfully submitted. We hope
              you find the perfect book to swap!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-indigo-300">
        <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-6">
          Swap Your Books
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              rows="3"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Your Book */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Your Book Name
            </label>
            <input
              type="text"
              name="yourBook"
              value={formData.yourBook}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Book Condition */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Book Condition
            </label>
            <select
              name="bookCondition"
              value={formData.bookCondition}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              required
            >
              <option value="" disabled>
                Select condition
              </option>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="used">Used</option>
              <option value="damaged">Damaged</option>
            </select>
          </div>

          {/* Desired Book */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Desired Book
            </label>
            <input
              type="text"
              name="desiredBook"
              value={formData.desiredBook}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Additional Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 px-4 py-2 text-gray-700"
              rows="3"
            />
          </div>

          {/* Picture Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Upload Picture of Your Book
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
              className="mt-2 block w-full"
              required
            />
            {picturePreview && (
              <img
                src={picturePreview}
                alt="Book Preview"
                className="mt-4 max-h-40 rounded-lg shadow-md border border-gray-300"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:shadow-lg hover:from-purple-600 hover:to-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Swapping;
