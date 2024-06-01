import { useState, useEffect } from "react";
import "../register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
////////
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
////////
import Loader from "../components/Loader.jsx/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log("res", res);
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  return (
    <div className="register-background">
      <div className="form-container">
        <div className="login form">
          <header>Login</header>
          <form className="register-form" onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isLoading && <Loader />}
            <input
              disabled={isLoading}
              type="submit"
              className="button"
              value="Login"
            />
          </form>
          <div className="register-other">
            <span className="register-other">
              Don't have an account?
              <label htmlFor="check">
                <Link to="/signup"> Signup</Link>
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
