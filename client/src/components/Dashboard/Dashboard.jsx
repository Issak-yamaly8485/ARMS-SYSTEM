import "./Dashboard.css";
import DashboardLine from "../DashboardLine/DashboardLine";
import '../../App.css'
const Dashboard = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Dashboard</h3>
      </div>
      <hr className="dashbaord-line" />
      <DashboardLine />
    </div>
  );
};

export default Dashboard;
