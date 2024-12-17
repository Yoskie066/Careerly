import React, { useState } from "react";
import "../../styles/PersonalInfo.css";

const PersonalInfo = ({ onChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    link1: "",
    link2: "",
    link3: "",
  });

  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.jobTitle ||
      !formData.phone ||
      !formData.email ||
      !formData.location ||
      !formData.link1 ||
      !formData.link2 ||
      !formData.link3
    ) {
      setModal({
        show: true,
        message: "Please fill out all required fields!",
        isSuccess: false,
      });
      return;
    }

    // If all fields are valid
    onChange(formData);
    setModal({
      show: true,
      message: "Personal Information Saved!",
      isSuccess: true,
    });
  };

  const closeModal = () => {
    setModal({ show: false, message: "", isSuccess: false });
  };

  return (
    <div className="personal-info-wrapper">
      <h3 className="personal-info-title">Personal Information</h3>

      <div className="input-group">
        <label className="input-label">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          className="input-field"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="input-field"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Location:</label>
        <input
          type="location"
          name="location"
          placeholder="Location"
          className="input-field"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Link 1:</label>
        <input
          type="url"
          name="link1"
          placeholder="Link 1"
          className="input-field"
          value={formData.link1}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Link 2:</label>
        <input
          type="url"
          name="link2"
          placeholder="Link 2"
          className="input-field"
          value={formData.link2}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Link 3:</label>
        <input
          type="url"
          name="link3"
          placeholder="Link 3"
          className="input-field"
          value={formData.link3}
          onChange={handleChange}
        />
      </div>

      <button className="add-info-button" onClick={handleSave}>
        Save
      </button>

      {/* Modal Component */}
      {modal.show && (
        <div className="modal-overlay">
          <div
            className={`modal-content ${
              modal.isSuccess ? "success-animation" : "error-animation"
            }`}
          >
            <p
              className={`modal-icon ${
                modal.isSuccess ? "check-icon" : "cross-icon"
              }`}
            >
              {modal.isSuccess ? "✅" : "❌"}
            </p>
            <p className="modal-message">{modal.message}</p>
            <button className="modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
