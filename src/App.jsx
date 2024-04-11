import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { auth } from "./firebase.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
    <ToastContainer position="top-center" />
      <div className="flex w-[400px] h-[650px] bg-white mx-auto my-[20px] p-8 border border-gray-300 shadow-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<Profile handleLogout={handleLogout} user={user} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
