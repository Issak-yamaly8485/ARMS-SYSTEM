import "./TopBar.css";
import DefaultIMG from "../../assets/images/userProfilePic.jpg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import logoutIcon from "../../assets/icons/logout.png";
import { logout } from "../../slices/authSlice";
const TopBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const route = useLocation();
  const { pathname } = route;
  const location = pathname.split("/").slice(-1).toString().toUpperCase();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggleSidebar } = useContext(SidebarContext);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={menuIcon} alt="" />
        </button>
        <h3 className="content-top-title">
          {location === "HOME" ? "Academic Review Managment System" : location}
        </h3>
      </div>
      <div className="user-logo">
        <span className="user-name">{userInfo.name}</span>
        <div className="user-img img-fit-cover">
          <a href="/account">
            <img
              src={
                userInfo.profilePic
                  ? `http://localhost:5000/${userInfo.profilePic}`
                  : DefaultIMG
              }
              alt="profile image"
            />
          </a>
        </div>
        <img
          className="logout-icon"
          src={logoutIcon}
          onClick={logoutHandler}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopBar;
