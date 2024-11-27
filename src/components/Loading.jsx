import React from "react";
import "./Loading.css"; // Create a separate CSS file for the loading screen

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
