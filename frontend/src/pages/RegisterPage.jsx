import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_AUTH_BACKEND_URL}/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerData.email,
            password: registerData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#000300] font-poppins flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-full max-w-md mb-4 rounded-lg shadow-md"
        />
        <p className="text-center font-semibold text-lg text-[white] max-w-md">
          Empower your journey with smart tools.
        </p>
        <p className="text-center font-semibold text-lg text-[white] max-w-md">
          Your all-in-one companion for career success.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#019963] text-white py-2 rounded-md hover:bg-[#019963] transition duration-300"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="block w-full text-center mt-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
