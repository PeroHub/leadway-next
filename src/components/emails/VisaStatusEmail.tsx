import * as React from "react";
// Remove this import: import Link from "next/link"; // <-- REMOVE THIS LINE

interface EmailProps {
  name: string;
  visaType: string;
  country: string;
  trackingNumber: string;
  currentStatus: string;
  customMessage: string;
  dear: string;
}

export const VisaStatusEmail = ({
  name,
  visaType,
  country,
  trackingNumber,
  currentStatus,
  customMessage,
  dear,
}: EmailProps) => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <h1 style={headerStyle}>Visa Application Update</h1>

      <p style={greetingStyle}>{dear},</p>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Application Summary</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Visa Type:</strong> {visaType}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Tracking Number:</strong> {trackingNumber}
        </p>
        <p>
          <strong>Current Status:</strong> {currentStatus}
        </p>
      </div>

      {customMessage && (
        <div style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>Message from our team</h2>
          <p style={messageStyle}>{customMessage}</p>
        </div>
      )}

      <div style={sectionStyle}>
        {/* Change Link to a standard <a> tag */}
        <a
          href="https://www.legalpathwayimmigrationlawfirm.org/track-visa"
          style={linkStyle}
        >
          https://www.legalpathwayimmigrationlawfirm.org/track-visa
        </a>
        <p>
          You can check your application status anytime using your tracking
          number.
        </p>
        <p>Thank you for choosing our services.</p>
      </div>

      <div style={footerStyle}>
        <p>Best regards,</p>
        <p>The Legal Pathway Immigration Team</p>
        <p style={contactStyle}>
          attorney@legalpathwayimmigrationlawfirm.org
          <br />
          +1 (430) 248-5763
        </p>
      </div>
    </div>
  </div>
);

// Email styling (you might want to add a style for the anchor tag too)
const containerStyle = {
  backgroundColor: "#f5f5f5",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const contentStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const headerStyle = {
  color: "#2c3e50",
  borderBottom: "2px solid #eaeaea",
  paddingBottom: "10px",
};

const greetingStyle = {
  fontSize: "16px",
  margin: "20px 0",
};

const sectionStyle = {
  margin: "20px 0",
};

const sectionHeaderStyle = {
  color: "#2c3e50",
  fontSize: "18px",
  marginBottom: "10px",
};

const messageStyle = {
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "5px",
  borderLeft: "4px solid #3498db",
};

const footerStyle = {
  marginTop: "30px",
  paddingTop: "20px",
  borderTop: "1px solid #eaeaea",
  color: "#7f8c8d",
};

const contactStyle = {
  fontSize: "14px",
  marginTop: "10px",
};

const linkStyle = {
  // Added style for the anchor tag
  color: "#3498db",
  textDecoration: "underline",
  fontSize: "16px",
  wordBreak: "break-all" as React.CSSProperties["wordBreak"], // Helps with long URLs on small screens
};

export default VisaStatusEmail;
