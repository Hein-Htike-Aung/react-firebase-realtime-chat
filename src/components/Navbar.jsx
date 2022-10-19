import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dev Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
