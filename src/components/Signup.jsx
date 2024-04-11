import React, { useState } from "react";
import { auth, db } from "../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneno: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.password) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      }


      const collectionRef = collection(db, "users");
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );


      await setDoc(doc(collectionRef, userCred.user.uid), {
        name: formData.name,
        phoneno: formData.phoneno,
        email: formData.email,
        companyName: formData.companyName,
        isAgency: formData.isAgency,
      });

      await updateProfile(userCred.user, {
        displayName: formData.name,
      });

      toast.success("User signed up successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(`Error signing up: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-2">
        Create your
        <br />
        PopX account
      </h1>
      <form className="flex flex-col gap-4 my-7 h-full" onSubmit={handleSignup}>
        <div className="flex flex-col relative">
          <label
            htmlFor="name"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your fullname"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="phoneno"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="phoneno"
            onChange={handleChange}
            value={formData.phoneno}
            placeholder="Enter phone number"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="email"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter email address"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="password"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter password"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="companyName"
            className="absolute text-sm px-2 -top-2 left-2 bg-white text-purple-600"
          >
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            onChange={handleChange}
            value={formData.companyName}
            placeholder="Enter your company name"
            className="border border-gray-300 w-full h-10 rounded-md p-4 placeholder:text-sm font-thin"
          />
        </div>

        <div className="flex flex-col relative">
          <h1 className="text-sm">
            Are you an Agency?<span className="text-red-500">*</span>
          </h1>
          <div className="flex gap-4 mt-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="yes"
                name="isAgency"
                className="focus:outline-none cursor-pointer"
                onChange={handleCheckboxChange}
                checked={formData.isAgency}
              />
              <label htmlFor="yes" className="text-gray-500 text-sm">
                Yes
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="no"
                name="isAgency"
                className="focus:outline-none cursor-pointer"
                onChange={handleCheckboxChange}
                checked={!formData.isAgency}
              />
              <label htmlFor="yes" className="text-gray-500 text-sm">
                No
              </label>
            </div>
          </div>
        </div>

        <button className="w-full bg-customPurple text-white rounded-md p-3 mt-auto">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
