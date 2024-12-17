import React, { useState, useEffect } from "react";
import "../../styles/Skills.css";
import { Pencil, Trash2 } from "lucide-react";

const Skills = ({ onAddSkill, onUpdateSkill, onDeleteSkill, skillToEdit }) => {
  const [skill, setSkill] = useState({
    id: null,
    name: "",
  });

  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Set form to edit mode if skillToEdit is passed
  useEffect(() => {
    if (skillToEdit) {
      setSkill(skillToEdit);
      setIsEditing(true);
    } else {
      resetForm();
    }
  }, [skillToEdit]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prev) => ({ ...prev, [name]: value }));
  };

  // Add skill handler
  const handleAddSkill = () => {
    if (validateForm()) {
      onAddSkill({ ...skill, id: Date.now() }); // Generate ID with Date.now()
      setModal({
        show: true,
        message: "Skill added successfully!",
        isSuccess: true,
      });
      resetForm();
    }
  };

  // Update skill handler
  const handleUpdateSkill = () => {
    if (validateForm()) {
      onUpdateSkill(skill);
      setModal({
        show: true,
        message: "Skill updated successfully!",
        isSuccess: true,
      });
      resetForm();
    }
  };

  // Delete skill handler
  const handleDelete = () => {
    onDeleteSkill(skill.id);
    setModal({
      show: true,
      message: "Skill deleted successfully!",
      isSuccess: true,
    });
    resetForm();
  };

  // Form validation
  const validateForm = () => {
    if (!skill.name.trim()) {
      setModal({
        show: true,
        message: "Please enter a valid skill!",
        isSuccess: false,
      });
      return false;
    }
    return true;
  };

  // Reset the form fields
  const resetForm = () => {
    setSkill({ id: null, name: "" });
    setIsEditing(false);
  };

  // Close the modal after action
  const closeModal = () => {
    setModal({ show: false, message: "", isSuccess: false });
  };

  return (
    <div className="skills-wrapper">
      <h3 className="skills-title">Skills</h3>

      <div className="input-group">
        <label className="input-label">Skill:</label>
        <input
          type="text"
          name="name"
          value={skill.name}
          onChange={handleChange}
          placeholder="Skill"
          className="input-field"
        />
      </div>

      <div className="buttons-container">
        {/* Add Skill Button */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleAddSkill}
            className="add-skill-button"
          >
            Add Skill
          </button>
        )}

        {/* Update Skill Button */}
        {isEditing && (
          <button
            type="button"
            onClick={handleUpdateSkill}
            className="update-skill-button flex justify-center items-center"
          >
            <Pencil className="h-4 w-4" />
            <span className="ml-2">Update</span>
          </button>
        )}

        {/* Delete Skill Button (only appears when editing) */}
        {isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            className="delete-skill-button flex justify-center items-center"
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

export default Skills;
