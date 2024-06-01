import "./Main.css";

import Dashboard from "../Dashboard/Dashboard";
import Announcement from "../Announcement/Announcement";
import Timeline from "../Timeline/Timeline";
import Notifcations from "../Notifcations/Notifcations";

const Main = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Dashboard />
      </div>
      <div className="content-grid-two">
        <Announcement />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
