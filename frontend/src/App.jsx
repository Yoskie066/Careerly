import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainMenuPage from "./pages/MainMenuPage";
import DashboardPage from "./pages/feature2_pages/DashboardPage";
import InterviewPage from "./pages/feature2_pages/InterviewPage";
import FeedbackPage from "./pages/feature2_pages/FeedbackPage";
import BuildPage from "./pages/BuildPage";
import Error from "./pages/Error";
import JobFinder from "./components/feature3_components/JobFinder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main-menu" element={<MainMenuPage />} />
        <Route path="/resume-builder" element={<BuildPage />} />
        <Route path="/interview-dashboard" element={<DashboardPage />} />
        <Route path="/job-finder" element={<JobFinder />} />
        <Route path="/interview/:id" element={<InterviewPage />} />
        <Route path="/feedback/:id" element={<FeedbackPage />} />
        <Route
          path="*"
          element={
            <Error message="The page you're looking for doesn't exist or is unavailable." />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
