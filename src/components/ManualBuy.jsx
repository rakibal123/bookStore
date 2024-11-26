import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const ManualBuy = () => {
  const { state } = useLocation();
  const { item } = state || {};
  const navigate = useNavigate(); // For redirecting to the home page after submission

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    paymentMethod: "cash",
    mobileBankingOption: "", // Track the selected mobile banking option
    transactionId: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted: ", formData); // Log the form data to see if it's populated

    // Check if mobile banking is selected and mobileBankingOption is not empty
    if (
      formData.paymentMethod === "mobile" &&
      !formData.mobileBankingOption
    ) {
      alert("Please select a mobile banking option.");
      return;
    }

    // Check if a transaction ID is required for mobile banking
    if (
      formData.paymentMethod !== "cash" &&
      (!formData.transactionId || formData.transactionId.trim() === "")
    ) {
      alert("Transaction ID is required for mobile banking.");
      return;
    }

    // Sending the email using EmailJS
    const emailParams = {
      name: formData.name,
      address: formData.address,
      mobile: formData.mobile,
      paymentMethod: formData.paymentMethod,
      mobileBankingOption: formData.mobileBankingOption,
      transactionId: formData.transactionId,
      itemName: item?.name,
      itemPrice: item?.price,
    };

    emailjs
      .send("service_0cxeg8m", "template_i5xt9sy", emailParams, "KzNiyMSW34DySVEX4")
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setShowThankYou(true); // Show the thank you message
        },
        (error) => {
          console.error("Error sending email", error);
        }
      );
  };

  const handleClosePopup = () => {
    setShowThankYou(false); // Close the thank you popup
    navigate("/home"); // Redirect to the home page
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {showThankYou ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center shadow-xl">
            <h1 className="text-2xl font-semibold text-green-500">Thank You!</h1>
            <p>Your order has been successfully placed.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Complete Your Purchase</h1>
          <div className="flex justify-center mb-6">
            <img
              className="w-1/2 h-auto object-cover rounded-lg"
              src={item?.image}
              alt={item?.name || "Book Image"}
            />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-medium text-black">{item?.name}</h2>
            <p className="text-xl text-gray-600">Price: ৳ {item?.price}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-lg text-gray-500">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border text-black rounded-lg shadow-sm"
                required
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="block text-lg text-gray-500">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border text-black rounded-lg shadow-sm"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="block text-lg text-gray-500">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-3 border text-black rounded-lg shadow-sm"
                required
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="block text-lg text-gray-500">Payment Method</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-500">Cash on Delivery</span>
                </label>
                <label className="inline-flex items-center text-gray-500">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile"
                    checked={formData.paymentMethod === "mobile"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-500">Mobile Banking</span>
                </label>
              </div>
            </div>

            {/* Mobile Banking Options (Visible only if mobile payment is selected) */}
            {formData.paymentMethod === "mobile" && (
              <div className="space-y-4">
                <label className="block text-lg">Select Mobile Banking</label>
                <div className="flex justify-center space-x-4">
                  <label className="flex flex-col items-center text-gray-500">
                    <input
                      type="radio"
                      name="mobileBankingOption"
                      value="bkash"
                      checked={formData.mobileBankingOption === "bkash"}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <img
                      src="https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg"
                      alt="Bkash"
                      className="w-16 h-16 mt-2"
                    />
                    <span className="mt-2 text-gray-500">Bkash</span>
                  </label>
                  <label className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="mobileBankingOption"
                      value="rocket"
                      checked={formData.mobileBankingOption === "rocket"}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <img
                      src="https://image.pixahunt.com/graphics/long/Pixahunt-4218df4e68e104c26a82ebca34e79fe0.webp
                      "
                      alt="Rocket"
                      className="w-16 h-16 mt-2"
                    />
                    <span className="mt-2 text-gray-500">Rocket</span>
                  </label>
                  <label className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="mobileBankingOption"
                      value="nagad"
                      checked={formData.mobileBankingOption === "nagad"}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <img
                      src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg"
                      alt="Nagad"
                      className="w-16 h-16 mt-2"
                    />
                    <span className="mt-2 text-gray-500">Nagad</span>
                  </label>
                </div>
              </div>
            )}

            {/* Transaction ID */}
            {formData.paymentMethod !== "cash" && (
              <div className="space-y-2">
                <label className="block text-lg text-gray-500">Transaction ID</label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black rounded-lg shadow-sm"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ManualBuy;
