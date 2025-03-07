import React from "react";

const GoogleMap = () => {
  const location = "220+7+Ave+SE,+Calgary,+AB";
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25204.6342!2d-114.0719!3d51.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEuMDQ1LC0xMTQuMDcxOQ!5e0!3m2!1sen!2sca!4v1618842345678`;

  return (
    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Embedded Google Map */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-none"
      ></iframe>

      {/* View Larger Map Button */}
      <div className="mt-2 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          View larger map
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
