import React, { useState } from "react";
import "../../styles/Header.css";

const Header = ({ profileImage, setProfileImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="header-wrapper">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-container">
          <div className="profile-frame">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="placeholder-text">No Profile Picture</div>
            )}
          </div>
          {/* Button to trigger file input */}
          <button
            className="select-image-button"
            onClick={() =>
              document.getElementById("profile-image-input").click()
            }
          >
            Select Image
          </button>
          <input
            id="profile-image-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-input"
            style={{ display: "none" }} // Hide the actual file input
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
