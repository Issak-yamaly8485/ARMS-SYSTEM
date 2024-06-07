import "./Dashboard.css";
import DashboardLine from "../DashboardLine/DashboardLine";

import "../../App.css";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [percentages, setpercentages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bit/phase4");
        if (!response.ok) {
          throw new Error("Failed to fetch percentage data");
        }
        const jsonData = await response.json();
        setpercentages(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Dashboard</h3>
      </div>
      <hr className="dashbaord-line" />
      {Object.entries(percentages)
        .filter(([key, value]) => value >= 50)
        .map(([key, value]) => (
          <DashboardLine key={key} label={key} percentage={value} />
        ))}
    </div>
  );
};

export default Dashboard;
