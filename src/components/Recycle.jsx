import React, { useState } from "react";
import emailjs from "emailjs-com";

const Recycle = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    bookName: "",
    condition: "",
    forFree: "yes", // Default to "yes"
    charge: "",
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

    const formDataToSend = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      bookName: formData.bookName,
      condition: formData.condition,
      forFree: formData.forFree === "yes" ? "Yes" : "No",
      charge: formData.charge || "Free",
    };

    emailjs
      .send(
        "service_0cxeg8m",
        "template_i5xt9sy",
        formDataToSend,
        "KzNiyMSW34DySVEX4"
      )
      .then(
        () => {
          setShowPopup(true); // Show the pop-up on success
          setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
          setFormData({
            name: "",
            address: "",
            phone: "",
            bookName: "",
            condition: "",
            forFree: "yes",
            charge: "",
            picture: null,
          });
          setPicturePreview(null);
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 flex flex-col items-center justify-center px-4">
      {/* Pop-Up Box */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
            <h3 className="text-2xl font-bold text-blue-600">Thank You!</h3>
            <p className="mt-3 text-gray-700">
              Your book recycling request has been successfully submitted. We
              appreciate your contribution!
            </p>
            <div className="mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-indigo-300">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
          Recycle Your Books
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
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
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
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
              rows="3"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Book Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
              required
            />
          </div>

          {/* Book Condition */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Condition
            </label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
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

          {/* For Free */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Do you want to give it for free?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="forFree"
                  value="yes"
                  checked={formData.forFree === "yes"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="forFree"
                  value="no"
                  checked={formData.forFree === "no"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
            </div>
          </div>

          {/* Charge */}
          {formData.forFree === "yes" && (
            <div>
              <label className="block text-lg font-medium text-gray-700">
                How much do you want for it?
              </label>
              <input
                type="number"
                name="charge"
                value={formData.charge}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-gray-700"
              />
            </div>
          )}

          {/* Picture Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Upload Picture
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
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recycle;
