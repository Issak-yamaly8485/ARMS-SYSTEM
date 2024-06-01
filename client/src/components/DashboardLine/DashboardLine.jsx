import { DashboardInfo } from "../../data/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


import "./DashboardLine.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardLine = ({}) => {
  return (
    <>
      {DashboardInfo.map((item, index) => (
        <div className="dashboard-item" key={index}>
          <h2>{item.Title}</h2>
          <div className="pie-container">
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    label: item.Title,
                    data: [item.Percentage, 100 - item.Percentage],
                    backgroundColor: [
                      "rgb(255, 188, 66)",
                      "rgb(120, 120, 120)",
                    ],
                    borderWidth: 0,
                    borderRadius: 3,
                    hoverBorderWidth: 0,
                    hoverOffset: 2,
                  },
                ],
              }}
            />
            <h3>{item.Percentage}%</h3>
          </div>

        </div>
      ))}
    </>
  );
};

export default DashboardLine;
