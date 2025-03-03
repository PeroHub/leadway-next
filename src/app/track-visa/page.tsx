"use client";

import { useState } from "react";

export default function OrderTracking() {
  //   const [orderNumber, setOrderNumber] = useState("");
  //   const [email, setEmail] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  //   const handleTrackOrder = () => {
  //     console.log("Tracking order:", { orderNumber, email });
  //   };

  const handleTrackByNumber = () => {
    console.log("Tracking by number:", trackingNumber);
  };

  return (
    <>
      <div className="pages-banner about">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1
              data-w-id="fe347540-b17b-7eb6-0d52-86453fd36721"
              style={{ opacity: 1 }}
              className="banner-title"
            >
              Track Your Visa
            </h1>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center bg-gray-50 px-4"
        style={{ marginTop: "60px", marginBottom: "40px" }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Order Number Tracking */}
            {/* <div>
            <label className="block text-gray-700 font-medium">
              Order Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
            <label className="block text-gray-700 font-medium mt-4">
              Email or Phone Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-purple-700"
              onClick={handleTrackOrder}
            >
              Track
            </div>
          </div> */}

            {/* Divider */}
            {/* <div className="flex flex-col items-center">
            <div className="h-full border-l border-gray-300"></div>
            <span className="text-gray-500">Or</span>
            <div className="h-full border-l border-gray-300"></div>
          </div> */}

            {/* Tracking Number Tracking */}
            <div className="" style={{ padding: "40px" }}>
              <label className="block text-gray-700 font-medium">
                Tracking Number
              </label>
              <input
                type="text"
                className="w-full border focus:outline-none p-4 rounded-lg px-3 py-2 mt-1"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <p
                className="bg-purple-600 text-center text-white px-6 py-4 rounded-lg mt-4 w-full hover:bg-purple-700"
                onClick={handleTrackByNumber}
              >
                Track
              </p>
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
    </>
  );
}
