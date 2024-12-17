import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeedbackHeader from "../../components/feature2_components/feedback_page_components/FeedbackHeader";
import InterviewSummary from "../../components/feature2_components/feedback_page_components/InterviewSummary";
import QuestionCardThree from "../../components/feature2_components/feedback_page_components/QuestionCardThree";
import useInterview from "../../hooks/useInterview";

const FeedbackPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { interview, getAverageRating } = useInterview(id, navigate);

  if (!interview) return null;

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <FeedbackHeader onNavigate={() => navigate("/interview-dashboard")} />
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-[white] rounded-lg shadow-md border-2 border-gray-500">
          <div className="p-6">
            <div className="space-y-6">
              <InterviewSummary averageRating={getAverageRating()} />
              <div className="space-y-4">
                {interview.questions.map((question, index) => (
                  <QuestionCardThree
                    key={index}
                    question={question}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackPage;
