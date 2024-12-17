import React, { useState, useEffect } from "react";
import "../../styles/ProjectForm.css";
import { Pencil, Trash2 } from "lucide-react";

const ProjectForm = ({
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  projectToEdit,
}) => {
  const [project, setProject] = useState({
    id: null,
    startDate: "",
    endDate: "",
    title: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  // Set form to edit mode if projectToEdit is passed
  useEffect(() => {
    if (projectToEdit) {
      setProject(projectToEdit);
      setIsEditing(true);
    } else {
      resetForm();
    }
  }, [projectToEdit]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Add project
  const handleAddProject = () => {
    if (validateForm()) {
      onAddProject({ ...project, id: Date.now() });
      showModal("Project added successfully!", true);
      resetForm();
    }
  };

  // Handle Update project
  const handleUpdateProject = () => {
    if (validateForm()) {
      onUpdateProject(project);
      showModal("Project updated successfully!", true);
      resetForm();
    }
  };

  // Handle project deletion
  const handleDelete = () => {
    onDeleteProject(project.id);
    showModal("Project deleted successfully!", true);
    resetForm();
  };

  // Form validation
  const validateForm = () => {
    if (
      !project.startDate.trim() ||
      !project.endDate.trim() ||
      !project.title.trim() ||
      !project.description.trim()
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
    setProject({
      id: null,
      startDate: "",
      endDate: "",
      title: "",
      description: "",
    });
    setIsEditing(false);
  };

  // Close the modal after an action
  const closeModal = () => {
    setModal({ show: false, message: "", isSuccess: false });
  };

  return (
    <div className="project-form-wrapper">
      <h3 className="project-form-title">Projects</h3>

      <div className="input-group">
        <label className="input-label">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={project.startDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={project.endDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Project Title:</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Description:</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          className="input-field resize-y"
        ></textarea>
      </div>

      <div className="buttons-container">
        {/* Add Project Button */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleAddProject}
            className="add-project-button"
          >
            Add Project
          </button>
        )}

        {/* Update Project Button */}
        {isEditing && (
          <button
            type="button"
            onClick={handleUpdateProject}
            className="update-project-button flex justify-center items-center"
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
            className="delete-project-button flex justify-center items-center"
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

export default ProjectForm;
