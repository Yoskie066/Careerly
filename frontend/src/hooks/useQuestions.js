import { useState, useEffect } from "react";

const PRE_INTERVIEW_QUESTIONS = [
  "Tell me about yourself.",
  "What are your greatest strengths?",
  "What is your biggest weakness?",
  "Why do you want to work here?",
  "Where do you see yourself in 5 years?",
  "Can you describe a challenging work situation and how you overcame it?",
  "What is your management style?",
  "How do you handle stress and pressure?",
  "What motivates you?",
  "Tell me about a time you showed leadership.",
  "How do you prioritize your work?",
  "What are your salary expectations?",
  "Do you have any questions for me?",
  "What's your approach to teamwork?",
  "How do you stay updated with industry trends?",
  "Describe a project you're particularly proud of.",
  "How do you handle conflicts with coworkers?",
  "What's your ideal work environment?",
  "How do you handle constructive criticism?",
  "Tell me about a time you failed and what you learned.",
];

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedText, setEditedText] = useState("");

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/v1/questions`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data = await response.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      setQuestions([]);
    }
  };

  const generateRandomQuestion = () => {
    const availableQuestions = PRE_INTERVIEW_QUESTIONS.filter(
      (q) => !questions.some((existingQ) => existingQ.text === q)
    );

    if (availableQuestions.length > 0) {
      const randomQuestion =
        availableQuestions[
          Math.floor(Math.random() * availableQuestions.length)
        ];

      setNewQuestion(randomQuestion);
    }
  };

  const addQuestion = async (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || isAddingQuestion) return;

    try {
      setIsAddingQuestion(true);
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/v1/questions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newQuestion }),
        }
      );

      if (!response.ok) throw new Error("Failed to add question");

      await fetchQuestions();
      setNewQuestion("");
    } catch (error) {
      console.error("Failed to add question:", error);
    } finally {
      setIsAddingQuestion(false);
    }
  };

  const deleteQuestion = async (questionId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/v1/questions/${questionId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error("Failed to delete question");
      await fetchQuestions();
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };

  const updateQuestion = async (questionId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/v1/questions/${questionId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: editedText }),
        }
      );

      if (!response.ok) throw new Error("Failed to update question");
      await fetchQuestions();
      setEditingQuestion(null);
      setEditedText("");
    } catch (error) {
      console.error("Failed to update question:", error);
    }
  };

  const startEditing = (question) => {
    setEditingQuestion(question._id);
    setEditedText(question.text);
  };

  const cancelEditing = () => {
    setEditingQuestion(null);
    setEditedText("");
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questions,
    newQuestion,
    isAddingQuestion,
    editingQuestion,
    editedText,
    setNewQuestion,
    addQuestion,
    deleteQuestion,
    updateQuestion,
    startEditing,
    cancelEditing,
    setEditedText,
    generateRandomQuestion,
  };
};

export default useQuestions;
