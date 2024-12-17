import React, { useState, useEffect } from "react";
import "../../styles/ExperienceForm.css";
import { Pencil, Trash2 } from "lucide-react";

const ExperienceForm = ({
  onAddExperience,
  onUpdateExperience,
  onDeleteExperience,
  experienceToEdit,
}) => {
  const [experience, setExperience] = useState({
    id: null,
    startDate: "",
    endDate: "",
    jobTitle: "",
    company: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false); // Determine if we're editing or adding
  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  // Set form to edit mode if experienceToEdit is passed
  useEffect(() => {
    if (experienceToEdit) {
      setExperience(experienceToEdit);
      setIsEditing(true);
    } else {
      resetForm();
    }
  }, [experienceToEdit]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Add experience
  const handleAddExperience = () => {
    if (validateForm()) {
      onAddExperience({ ...experience, id: Date.now() });
      showModal("Experience added successfully!", true);
      resetForm();
    }
  };

  // Handle Update experience
  const handleUpdateExperience = () => {
    if (validateForm()) {
      onUpdateExperience(experience);
      showModal("Experience updated successfully!", true);
      resetForm();
    }
  };

  // Handle experience deletion
  const handleDelete = () => {
    onDeleteExperience(experience.id);
    showModal("Experience deleted successfully!", true);
    resetForm();
  };

  // Form validation
  const validateForm = () => {
    if (
      !experience.startDate.trim() ||
      !experience.endDate.trim() ||
      !experience.jobTitle.trim() ||
      !experience.company.trim() ||
      !experience.description.trim()
    ) {
      showModal("Please fill out all required fields!", false);
      return false;
    }
    return true;
  };

  // Show modal with feedback
  const showModal = (message, isSuccess) => {
    setModal({ show: true, message, isSuccess });
  };

  // Reset the form fields
  const resetForm = () => {
    setExperience({
      id: null,
      startDate: "",
      endDate: "",
      jobTitle: "",
      company: "",
      description: "",
    });
    setIsEditing(false);
  };

  // Close the modal after an action
  const closeModal = () => {
    setModal({ show: false, message: "", isSuccess: false });
  };

  return (
    <div className="experience-form-wrapper">
      <h3 className="experience-form-title">Work Experience</h3>

      <div className="input-group">
        <label className="input-label">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={experience.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Company:</label>
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
          placeholder="Company"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Description:</label>
        <textarea
          name="description"
          value={experience.description}
          onChange={handleChange}
          placeholder="Description"
          className="input-field resize-y"
        ></textarea>
      </div>

      <div className="buttons-container">
        {/* Add Experience Button */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleAddExperience}
            className="add-experience-button"
          >
            Add Experience
          </button>
        )}

        {/* Update Experience Button */}
        {isEditing && (
          <button
            type="button"
            onClick={handleUpdateExperience}
            className="update-experience-button flex justify-center items-center"
          >
            <Pencil className="h-4 w-4" />
            <span className="ml-2">Update</span>
          </button>
        )}

        {/* Delete Button (only appears when in edit mode) */}
        {isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            className="delete-experience-button flex justify-center items-center"
          >
            <Trash2 className="h-4 w-4" />
            <span className="ml-2">Delete</span>
          </button>
        )}
      </div>

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

export default ExperienceForm;
