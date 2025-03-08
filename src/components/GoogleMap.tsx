import React from "react";

const GoogleMap = () => {
  const location = "3250+Bloor+St+W+Suite+600,+Toronto,+ON+M8X+2X9,+Canada";
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.996685729847!2d-79.53138868450204!3d43.64926097912164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37f5b5a5a5a5%3A0x5f5f5f5f5f5f5f5f!2s3250%20Bloor%20St%20W%20Suite%20600%2C%20Toronto%2C%20ON%20M8X%202X9%2C%20Canada!5e0!3m2!1sen!2sca!4v1699999999999`;

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
