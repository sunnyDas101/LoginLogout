import React from "react";
import img from "../assets/user.png";

const Profile = ({ handleLogout, user }) => {
  return (
    <>
      <div className="flex flex-col relative">
        <span
          className="absolute bottom-0 right-0 bg-customPurple text-white text-sm p-1 rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </span>
        <header className="text-xl">Account Settings</header>
        <div className="flex items-center gap-4">
          <div className="border rounded-full w-[80px] h-[80px] mt-10 relative overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-fit object-contain absolute"
            />
          </div>

          <div>
            <h1 className="font-bold">
              {(user && user.displayName) || "Username"}
            </h1>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          facilis, illo doloribus est ducimus iste unde impedit labore{" "}
        </p>
      </div>
    </>
  );
};

export default Profile;
