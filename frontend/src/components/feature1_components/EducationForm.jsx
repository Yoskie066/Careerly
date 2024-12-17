import React, { useState, useEffect } from "react";
import "../../styles/EducationForm.css";
import { Pencil, Trash2 } from "lucide-react";

const EducationForm = ({
  onAddEducation,
  onUpdateEducation,
  onDeleteEducation,
  educationToEdit,
}) => {
  const [education, setEducation] = useState({
    id: null,
    startDate: "",
    endDate: "",
    course: "",
    school: "",
    description: "",
  });

  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Set form to edit mode if educationToEdit is passed
  useEffect(() => {
    if (educationToEdit) {
      setEducation(educationToEdit);
      setIsEditing(true);
    } else {
      resetForm();
    }
  }, [educationToEdit]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  // Add education handler
  const handleAddEducation = () => {
    if (validateForm()) {
      onAddEducation({ ...education, id: Date.now() }); // Generating ID with Date.now()
      setModal({
        show: true,
        message: "Education added successfully!",
        isSuccess: true,
      });
      resetForm();
    }
  };

  // Update education handler
  const handleUpdateEducation = () => {
    if (validateForm()) {
      onUpdateEducation(education);
      setModal({
        show: true,
        message: "Education updated successfully!",
        isSuccess: true,
      });
      resetForm();
    }
  };

  // Delete education handler
  const handleDelete = () => {
    onDeleteEducation(education.id);
    setModal({
      show: true,
      message: "Education deleted successfully!",
      isSuccess: true,
    });
    resetForm();
  };

  // Form validation
  const validateForm = () => {
    if (
      !education.startDate.trim() ||
      !education.endDate.trim() ||
      !education.course.trim() ||
      !education.school.trim() ||
      !education.description.trim()
    ) {
      setModal({
        show: true,
        message: "Please fill out all required fields!",
        isSuccess: false,
      });
      return false;
    }
    return true;
  };

  // Reset the form fields
  const resetForm = () => {
    setEducation({
      id: null,
      startDate: "",
      endDate: "",
      course: "",
      school: "",
      description: "",
    });
    setIsEditing(false);
  };

  // Close the modal after action
  const closeModal = () => {
    setModal({ show: false, message: "", isSuccess: false });
  };

  return (
    <div className="education-form-wrapper">
      <h3 className="education-form-title">Education</h3>

      <div className="input-group">
        <label className="input-label">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Course:</label>
        <input
          type="text"
          name="course"
          value={education.course}
          onChange={handleChange}
          placeholder="Course"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">School/College:</label>
        <input
          type="text"
          name="school"
          value={education.school}
          onChange={handleChange}
          placeholder="School/College"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Description:</label>
        <textarea
          name="description"
          value={education.description}
          onChange={handleChange}
          placeholder="Description"
          className="input-field resize-y"
        ></textarea>
      </div>

      <div className="buttons-container">
        {/* Add Education Button */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleAddEducation}
            className="add-education-button"
          >
            Add Education
          </button>
        )}

        {/* Update Education Button */}
        {isEditing && (
          <button
            type="button"
            onClick={handleUpdateEducation}
            className="update-education-button flex justify-center items-center"
          >
            <Pencil className="h-4 w-4" />
            <span className="ml-2">Update</span>
          </button>
        )}

        {/* Delete Education Button (only appears when editing) */}
        {isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            className="delete-education-button flex justify-center items-center"
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

export default EducationForm;
