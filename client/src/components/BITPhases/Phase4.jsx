import React, { useEffect, useState } from "react";
import { BITphase4_1 } from "../../data/data";
import { Link } from "react-router-dom";
import PercentageLine from "../Percentage-Line/PercentageLine";
import "./BITphase.css";

const Phase4 = () => {
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
    <div>
      <h1>Curriculum Review Process Flow</h1>
      <div className="phases-container">
        {BITphase4_1.map((phase, index) => (
          <React.Fragment key={index}>
            <div className="stage">
              <Link className="phase-span" to={`s${index + 1}`}>
                <span>
                  <p> {phase.title}</p>
                  <PercentageLine percentage={percentages[phase.page]} />
                </span>
              </Link>
            </div>
            <div className="line" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Phase4;
