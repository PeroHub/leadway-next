"use client";

import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react"; // For a modern loading spinner

export default function SendEmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    email: "",
    visaType: "",
    country: "",
    date: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const sendEmailMutation = useMutation<void, unknown, typeof formData>({
    mutationFn: async (data: typeof formData) => {
      const response = await axios.post("/api/send-email", data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
    onSuccess: () => {
      setShowMessage(true);
    },
    onError: () => {
      setShowMessage(true);
    },
  });

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmailMutation.mutate(formData);
  };

  return (
    <div
      className="max-w-lg bg-white p-10 shadow-lg rounded-2xl border border-gray-200"
      style={{ margin: "100px auto" }}
    >
      <h2
        className="text-lg font-extrabold text-center text-gray-900 mb-6"
        style={{ fontSize: "2.3rem" }}
      >
        Approve Template
      </h2>

      {/* Success and Error Messages */}
      {showMessage && sendEmailMutation.isSuccess && (
        <p className="text-center text-green-700 bg-green-100 p-3 rounded-lg mb-4 font-medium">
          ✅ Email sent successfully!
        </p>
      )}
      {showMessage && sendEmailMutation.isError && (
        <p className="text-center text-red-700 bg-red-100 p-3 rounded-lg mb-4 font-medium">
          ❌ Error: {(sendEmailMutation.error as Error)?.message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        style={{ padding: "10px" }}
      >
        {/* Input Fields */}
        <div className="space-y-4">
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            {
              name: "passportNumber",
              type: "text",
              placeholder: "Passport Number",
            },
            { name: "email", type: "email", placeholder: "Email Address" },
            { name: "visaType", type: "text", placeholder: "Visa Type" },
            { name: "country", type: "text", placeholder: "Country" },
            { name: "date", type: "date", placeholder: "Date" },
          ].map((field) => (
            <div key={field.name} style={{ marginTop: "10px" }}>
              <label className="text-gray-500" style={{ margin: "5px" }}>
                {field.name.toUpperCase()}
              </label>
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                style={{ padding: "10px" }}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                required
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ padding: "10px", marginTop: "30px" }}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={sendEmailMutation.status === "pending"}
        >
          {sendEmailMutation.status === "pending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            "Send Email"
          )}
        </button>
      </form>
    </div>
  );
}
