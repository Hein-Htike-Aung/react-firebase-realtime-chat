import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Dev Chat</span>
      <div className="user">
        <img
          src={
            currentUser.photoURL ||
            "https://images.pexels.com/photos/8088494/pexels-photo-8088494.jpeg?auto=compress&cs=tinysrgb&w=1200"
          }
          alt=""
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
