import { DashboardInfo } from "../../data/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./DashboardLine.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardLine = ({ percentage, label, key }) => {
  return (
    <>
      <div className="dashboard-item" key={key}>
        <h2>{label}</h2>
        <div className="pie-container">
          <Doughnut
            data={{
              labels: [],
              datasets: [
                {
                  label: label,
                  data: [percentage, 100 - percentage],
                  backgroundColor: ["rgb(255, 188, 66)", "rgb(120, 120, 120)"],
                  borderWidth: 0,
                  borderRadius: 3,
                  hoverBorderWidth: 0,
                  hoverOffset: 2,
                },
              ],
            }}
          />
          <h3>{percentage}%</h3>
        </div>
      </div>
    </>
  );
};

export default DashboardLine;
