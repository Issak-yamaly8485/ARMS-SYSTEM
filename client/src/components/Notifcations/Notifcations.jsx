import "./Notifcations.css";
import { iconsImgs } from "../../utils/images";

const Notifcations = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Notifcations</h3>
        <button className="grid-c-title-icon">
          {/* <img src={iconsImgs.plus} /> */}
        </button>
      </div>
      <div className="grid-c3-content">
        <ul>
          <li className="notification-item">You have upcoming activies due</li>
          <li className="notification-item">
            Appointing internal and external assessors is complete
          </li>
          <li className="notification-item">
            You have updated your appointment date
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifcations;
