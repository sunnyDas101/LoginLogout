import React, { useState } from "react";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User signed in successfully");
      navigate(`/profile`);
    } catch (err) {
      toast.error(`Error signing in: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col w-full relative">
       <span className="absolute bottom-0 right-0 bg-customPurple text-white text-sm p-1 rounded-md cursor-pointer" onClick={() => navigate("/") }>Home</span>
      <h1 className="text-2xl font-bold mb-2">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="text-md text-gray-500">
        Lorem ipsum dolor sit amet
        <br />
        consectetur, adipisicing elit.
      </p>

      <form className="flex flex-col gap-4 my-7" onSubmit={handleLogin}>
        <div className="flex flex-col relative">
          <label
            htmlFor="email"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="password"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Email
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-white rounded-md p-3 hover:bg-customPurple transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
