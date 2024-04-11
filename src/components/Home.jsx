import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  }

  const handleLoginClick = () => {
    navigate("/login");
  }

  return (
    <div className="flex flex-col mt-auto">
      <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-md text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className="flex flex-col gap-2 mt-6">
        <button className="w-full p-3 bg-customPurple text-white rounded-md" onClick={handleSignupClick}>
          Create Account
        </button>
        <button className="w-full p-3 bg-customPink text-#000 rounded-md" onClick={handleLoginClick}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
