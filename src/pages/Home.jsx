import React from "react";
import Chat from "../components/layout/Chat";
import Sidebar from "../components/layout/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
