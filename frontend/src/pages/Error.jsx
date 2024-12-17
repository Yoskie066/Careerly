import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-message">
        {message ||
          "The page you're looking for doesn't exist or is unavailable."}
      </p>
      <div className="error-navigation">
        <Link to="/resume-builder" className="error-link">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Error;
