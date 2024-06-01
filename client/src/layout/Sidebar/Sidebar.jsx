import { useEffect, useState } from "react";
import IIUMlogo from "../../assets/images/IIUM-logo.png";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { SidebarContext } from "../../context/sidebarContext";
import { useContext } from "react";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import logoutIcon from "../../assets/icons/logout.png";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="arms-logo">
        <div className="arms-img img-fit-cover">
          <Link to="/home">
            <img src={IIUMlogo} alt="profile image" />
          </Link>
        </div>
        <span className="arms-name">ARMS</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li
              title={navigationLink.title}
              className="nav-item"
              key={navigationLink.id}
            >
              <NavLink
                to={navigationLink.link}
                activeclassname="active"
                className="nav-link"
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button className="nav-logout-button" onClick={logoutHandler}>
        <img
          className="nav-logout-icon"
          src={logoutIcon}
          onClick={logoutHandler}
          alt=""
        />
        <span className="nav-logout-text">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
