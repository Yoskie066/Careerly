import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/BuildPage.css";
import PersonalInfo from "../components/feature1_components/PersonalInfo";
import Skills from "../components/feature1_components/Skills";
import ExperienceForm from "../components/feature1_components/ExperienceForm";
import EducationForm from "../components/feature1_components/EducationForm";
import ProjectForm from "../components/feature1_components/ProjectForm";
import Header from "../components/feature1_components/Header";
import html2pdf from "html2pdf.js";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BuildPage = () => {
  const navigate = useNavigate();
  const viewMainMenu = () => navigate("/main-menu");

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    skills: [],
    experiences: [],
    projects: [],
    education: [],
  });

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const [pages] = useState([[]]);
  const containerRef = useRef();
  const previewRef = useRef();

  const [profileImage, setProfileImage] = useState(null);

  // Handle updates to resume sections
  const handlePersonalInfoChange = (updatedInfo) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...updatedInfo },
    }));
  };

  const [skillToEdit, setSkillToEdit] = useState(null);

  const handleAddSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const handleUpdateSkill = (updatedSkill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((sk) =>
        sk.id === updatedSkill.id ? updatedSkill : sk
      ),
    }));
  };

  const handleDeleteSkill = (id) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((sk) => sk.id !== id),
    }));
    setSkillToEdit(null);
  };

  // Handle editing skill
  const handleEditSkill = (skill) => {
    setSkillToEdit(skill);
  };

  const [experienceToEdit, setExperienceToEdit] = useState(null);

  const handleAddExperience = (experience) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, experience],
    }));
  };

  const handleUpdateExperience = (updatedExperience) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === updatedExperience.id ? updatedExperience : exp
      ),
    }));
  };

  const handleDeleteExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
    setExperienceToEdit(null);
  };

  // Handle editing experience
  const handleEditExperience = (experience) => {
    setExperienceToEdit(experience);
  };

  const [projectToEdit, setProjectToEdit] = useState(null);

  const handleAddProject = (project) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  };

  const handleUpdateProject = (updatedProject) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === updatedProject.id ? updatedProject : proj
      ),
    }));
  };

  const handleDeleteProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
    setProjectToEdit(null);
  };

  // Handle editing project
  const handleEditProject = (project) => {
    setProjectToEdit(project);
  };

  const [educationToEdit, setEducationToEdit] = useState(null);

  const handleAddEducation = (education) => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, education],
    }));
  };

  const handleUpdateEducation = (updatedEducation) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      ),
    }));
  };

  const handleDeleteEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
    setEducationToEdit(null);
  };

  // Handle editing education
  const handleEditEducation = (education) => {
    setEducationToEdit(education);
  };

  // Function to check if the resume is empty
  const isResumeEmpty = () => {
    const { personalInfo, skills, experiences, projects, education } =
      resumeData;
    return (
      !profileImage &&
      Object.keys(personalInfo).length === 0 &&
      skills.length === 0 &&
      experiences.length === 0 &&
      projects.length === 0 &&
      education.length === 0
    );
  };

  const handleDownloadPDF = () => {
    if (!previewRef.current) {
      console.error("Preview element not found!");
      return;
    }

    const options = {
      filename: "Resume - Careerly.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    if (isResumeEmpty()) {
      const blankDiv = document.createElement("div");
      blankDiv.style.height = "297mm";
      blankDiv.style.width = "210mm";
      blankDiv.style.background = "white";
      html2pdf().set(options).from(blankDiv).save();
      return;
    }

    // Directly use html2pdf to handle dynamic page height and splitting
    html2pdf()
      .set(options)
      .from(previewRef.current)
      .save()
      .catch((error) => console.error("PDF Generation Failed:", error));
  };

  return (
    <>
      <header className="bg-[#000300] text-[#00df9a] p-4 font-staat">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2">
            <button
              className="hover:text-white text-base sm:text-2xl font-normal flex items-center"
              onClick={viewMainMenu}
            >
              <ArrowLeft />
              <span className="ml-2">Main Menu</span>
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="flex items-center font-normal text-base sm:text-2xl">
              Resume Builder
              <span className="ml-2">
                <FileText />
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="build-page-container font-poppins">
        {/* Left Side: Input Panel */}
        <div className={`input-panel ${isSidebarOpen ? "open" : "closed"}`}>
          {/* Toggle button is inside the panel */}
          <div className="sidebar-header">
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Sidebar content */}
          {isSidebarOpen && (
            <div className="left-side">
              {/* Download PDF Button */}
              <Header
                profileImage={profileImage}
                setProfileImage={setProfileImage}
              />

              <PersonalInfo onChange={handlePersonalInfoChange} />

              <Skills
                onAddSkill={handleAddSkill}
                onUpdateSkill={handleUpdateSkill}
                onDeleteSkill={handleDeleteSkill}
                skillToEdit={skillToEdit}
              />

              <ExperienceForm
                onAddExperience={handleAddExperience}
                onUpdateExperience={handleUpdateExperience}
                onDeleteExperience={handleDeleteExperience}
                experienceToEdit={experienceToEdit}
              />

              <ProjectForm
                onAddProject={handleAddProject}
                onUpdateProject={handleUpdateProject}
                onDeleteProject={handleDeleteProject}
                projectToEdit={projectToEdit}
              />

              <EducationForm
                onAddEducation={handleAddEducation}
                onUpdateEducation={handleUpdateEducation}
                onDeleteEducation={handleDeleteEducation}
                educationToEdit={educationToEdit}
              />
              <div className="flex justify-center items-center">
                <button
                  className="download-pdf-btn mt-5 mb-5 flex justify-center items-center"
                  onClick={handleDownloadPDF}
                >
                  <Download />
                  <span className="ml-2">Download PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: A4 Resume Preview */}
        <div className="preview-panel" ref={previewRef}>
          {pages.map((pageContent, pageIndex) => (
            <div key={pageIndex} className="a4-preview">
              <div ref={containerRef}>
                {/* Personal Info Section*/}
                {pageIndex === 0 && (
                  <>
                    <div className="profile-frames">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="profile-image-preview"
                        />
                      ) : (
                        <div className="placeholder-text">Add Profile</div>
                      )}
                    </div>

                    <div className="personal-info-section">
                      <h1>{resumeData.personalInfo.name || "Name"}</h1>
                      <h2>{resumeData.personalInfo.jobTitle || "Job Title"}</h2>
                      <div className="personal-information">
                        <p>{resumeData.personalInfo.phone || "Phone"} |</p>
                        <p>{resumeData.personalInfo.email || "Email"} |</p>
                        <p>{resumeData.personalInfo.location || "Location"} </p>
                      </div>

                      <div className="links-column">
                        <span>
                          {resumeData.personalInfo.link1 ? (
                            <a
                              href={resumeData.personalInfo.link1}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resumeData.personalInfo.link1}
                            </a>
                          ) : (
                            "Link1"
                          )}
                        </span>
                        <span>
                          {resumeData.personalInfo.link2 ? (
                            <a
                              href={resumeData.personalInfo.link2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resumeData.personalInfo.link2}
                            </a>
                          ) : (
                            "Link2"
                          )}
                        </span>
                        <span>
                          {resumeData.personalInfo.link3 ? (
                            <a
                              href={resumeData.personalInfo.link3}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resumeData.personalInfo.link3}
                            </a>
                          ) : (
                            "Link3"
                          )}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Skills Section */}
                <div className="section">
                  <h2>Skills</h2>
                  {resumeData.skills.length > 0 ? (
                    <div className="skill-container">
                      {resumeData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="skill-item"
                          onClick={() => handleEditSkill(skill)}
                        >
                          <div className="skill-header">
                            <span>•</span> {skill.name}
                          </div>
                          <div className="skill-description">
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Add skills</p>
                  )}
                </div>

                {/* Experience Section */}
                <div className="section">
                  <h2>Experience</h2>
                  {resumeData.experiences.length > 0 ? (
                    <div className="experience-container">
                      {resumeData.experiences.map((experience, index) => (
                        <div
                          key={index}
                          className="experience-item"
                          onClick={() => handleEditExperience(experience)}
                        >
                          <div className="experience-header">
                            <strong>{experience.jobTitle}</strong> at{" "}
                            <em>{experience.company}</em>
                          </div>
                          <div className="experience-duration">
                            {experience.startDate} - {experience.endDate}
                          </div>
                          <div>{experience.description}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Add Work Experience</p>
                  )}
                </div>

                {/* Projects Section */}
                <div className="section">
                  <h2>Projects</h2>
                  {resumeData.projects.length > 0 ? (
                    <div className="projects-container">
                      {resumeData.projects.map((project, index) => (
                        <div
                          key={index}
                          className="project-item"
                          onClick={() => handleEditProject(project)}
                        >
                          <div className="project-header">
                            <strong>{project.title}</strong>
                          </div>
                          <div className="project-duration">
                            {project.startDate} - {project.endDate}
                          </div>
                          <p>{project.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Add Projects</p>
                  )}
                </div>

                {/* Education Section */}
                <div className="section">
                  <h2>Education</h2>
                  {resumeData.education.length > 0 ? (
                    <div className="education-container">
                      {resumeData.education.map((education, index) => (
                        <div
                          key={index}
                          className="education-item"
                          onClick={() => handleEditEducation(education)}
                        >
                          <div className="education-header">
                            <strong>{education.course}</strong> at{" "}
                            <em>{education.school}</em>
                          </div>
                          <div className="education-duration">
                            {education.startDate} - {education.endDate}
                          </div>
                          <p>{education.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Add education</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuildPage;
