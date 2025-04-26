"use client";

// import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

// export default function ContactCard() {
//   return (
//     <div
//       className="max-w-sm p-2 bg-white rounded-2xl shadow-md"
//       style={{ margin: "60px auto", padding: "10px" }}
//     >
//       <h2 className="text-xl font-semibold mb-4" style={{ fontSize: "1.5rem" }}>
//         Ask Us Anything
//       </h2>
//       <div className="space-y-3">
//         <div className="flex-col justify-center items-center gap-2">
//           <MapPin className="text-red-500 w-10 h-10 mt-1" />
//           <p className="text-gray-700">
//             3250 Bloor St W Suite 600, Toronto, ON M8X 2X9, Canada
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Phone className="text-red-500 w-5 h-5" />
//           <p className="text-gray-700">+1 (430) 248-5763</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Mail
//             className="text-red-500 w-5 h-5"
//             // style={{ width: "20px", height: "20px" }}
//           />
//           {/* <p className="text-gray-700">support@kelenserviceca.com</p> */}
//           <p className="text-gray-700">
//             <Link
//               className="text-gray-700"
//               style={{ color: "black" }}
//               href={"mailto:attorney@legalpathwayimmigrationlawfirm.org"}
//             >
//               attorney@legalpathwayimmigrationlawfirm.org
//             </Link>
//           </p>
//         </div>
//       </div>
//       <Link
//         style={{ marginTop: "10px", marginBottom: "10px" }}
//         href="/contact-us"
//         className="mt-4 inline-block text-red-500 font-medium hover:underline"
//       >
//         Contact us →
//       </Link>
//     </div>
//   );
// }

import type React from "react";

// import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button"

export default function ContactCard() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission logic here
  //   console.log("Form submitted:", formData)
  //   alert("Form submitted successfully!")
  // }

  return (
    <div
      className="max-w-md p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-lg"
      style={{ margin: "60px auto", padding: "10px" }}
    >
      <div className="space-y-8">
        {/* Phone Number */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-600 rounded-full p-3 mb-2">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <h3
            className="text-gray-800  font-medium"
            style={{ fontSize: "20px", lineHeight: ".5" }}
          >
            +1 (430) 248-5763
          </h3>
          <p className="text-gray-500 mt-0" style={{ lineHeight: "5px" }}>
            Office Phone Number
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div
            className="bg-red-600 rounded-full p-3 mb-2"
            style={{ marginTop: "20px" }}
          >
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3
            className="text-gray-800 font-medium break-all leading-2"
            style={{ fontSize: "18px" }}
          >
            {/* attorney@legalpathwayimmigrationlawfirm.org */}
            <Link
              className="text-gray-700"
              style={{ color: "black" }}
              href={"mailto:attorney@legalpathwayimmigrationlawfirm.org"}
            >
              attorney@legalpathwayimmigrationlawfirm.org
            </Link>
          </h3>
          <p className="text-gray-500" style={{ lineHeight: "5px" }}>
            Office Email Address
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <div
            className="bg-red-600 rounded-full p-3 mb-2"
            style={{ marginTop: "20px" }}
          >
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h3
            className="text-gray-800 font-medium"
            style={{ fontSize: "18px" }}
          >
            3250 Bloor St W Suite 600, Toronto, ON M8X 2X9, Canada
          </h3>
          <p className="text-gray-500" style={{ lineHeight: "5px" }}>
            Company Office Address
          </p>
        </div>

        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className="mt-8 bg-gray-200 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition-colors"
            >
              Submit Request
            </Button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
