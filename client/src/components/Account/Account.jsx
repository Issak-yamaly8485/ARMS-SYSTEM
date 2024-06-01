import { useEffect, useState } from "react";
import DefaultIMG from "../../assets/images/userProfilePic.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import "./Account.css";
import FormInput from "./FormInput";
import { setCredentials } from "../../slices/authSlice";
import Loader from "../Loader.jsx/Loader";
import { toast } from "react-toastify";
import AccountModal from "./AccountModal";
const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [identityCardOrPassportNo, setIdentityCardOrPassportNo] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [religion, setReligion] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (userInfo) {
      const {
        name,
        email,
        role,
        country,
        maritalStatus,
        identityCardOrPassportNo,
        gender,
        address,
        birthday,
        religion,
        mobile,
        profilePic,
      } = userInfo;

      setName(name || "");
      setRole(role || "undefined");
      setEmail(email || "");
      setCountry(country || "");
      setMaritalStatus(maritalStatus || "");
      setIdentityCardOrPassportNo(identityCardOrPassportNo || "");
      setGender(gender || "");
      setAddress(address || "");
      setBirthday(birthday || "");
      setReligion(religion || "");
      setMobile(mobile || "");
      setProfilePic(profilePic || "");
    }
  }, [userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          country,
          maritalStatus,
          identityCardOrPassportNo,
          gender,
          address,
          birthday,
          religion,
          mobile,
          password,
        }).unwrap();
        console.log("res submit handler", res);
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  console.log("profilePic", profilePic);
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-info-container">
        <div className="profile-info-container">
          <img
            className="profile-img"
            src={
              profilePic ? `http://localhost:5000/${profilePic}` : DefaultIMG
            }
          />
          <AccountModal id={userInfo._id} />
        </div>

        <ul>
          <li>Username: {name}</li>
          <li>User role: {role}</li>
        </ul>
      </div>
      <h1>Personal Info</h1>
      <div className="personal-info-container">
        <form className="personal-info-form" onSubmit={submitHandler}>
          <FormInput
            label="Name"
            value={name}
            onEdit={(e) => setName(e.target.value)}
          />{" "}
          <FormInput
            label="Email"
            value={email}
            onEdit={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Country"
            value={country}
            onEdit={(e) => setCountry(e.target.value)}
          />
          <FormInput
            label="Marital Status"
            value={maritalStatus}
            placeholder="['single', 'married', 'divorced', 'widowed', 'unspecified']"
            onEdit={(e) => setMaritalStatus(e.target.value)}
          />
          <FormInput
            label="Identity Card/ Passport No"
            value={identityCardOrPassportNo}
            onEdit={(e) => setIdentityCardOrPassportNo(e.target.value)}
          />
          <FormInput
            label="Gender"
            value={gender}
            placeholder="['male', 'female','unspecified]"
            onEdit={(e) => setGender(e.target.value)}
          />
          <FormInput
            label="Address"
            value={address}
            onEdit={(e) => setAddress(e.target.value)}
          />
          <FormInput
            label="Birthday"
            value={birthday}
            onEdit={(e) => setBirthday(e.target.value)}
          />
          <FormInput
            label="Religion"
            value={religion}
            onEdit={(e) => setReligion(e.target.value)}
          />
          <FormInput
            label="Mobile"
            value={mobile}
            onEdit={(e) => setMobile(e.target.value)}
          />
          {isLoading && <Loader />}
          <input type="submit" id="submit-button" value="Update Info" />
        </form>
      </div>
    </div>
  );
};

export default Account;
