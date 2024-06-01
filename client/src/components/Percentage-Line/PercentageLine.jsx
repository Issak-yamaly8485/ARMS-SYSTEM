import React, { useState, useEffect } from "react";
import "./PercentageLine.css";

const PercentageLine = ({ percentage }) => {
  const percentageColor = (percentage) => {
    if (percentage <= 20) {
      return "#ff474c";
    }
    if (percentage <= 50) {
      return "#ffbc42";
    }
    if (percentage <= 100) {
      return "#07bc0c";
    }
  };
  return (
    <div className="progressbar">
      <div
        style={{
          height: "100%",
          width: `${percentage}%`,
          backgroundColor: `${percentageColor(percentage)}`,
          transition: "width 0.5s",
        }}
      ></div>
      <span className="progressPercent">{percentage}%</span>
    </div>
  );
};

export default PercentageLine;
