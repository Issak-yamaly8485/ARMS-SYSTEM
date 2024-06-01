import React from "react";
import "./About_us.css";

import phone from "../../assets/icons/call.png";
import location from "../../assets/icons/location-pin.png";
import mail from "../../assets/icons/mail-2569.svg";
import fax from "../../assets/icons/fax.png";

const about_us = () => {
  return (
    <div className="about_us">
      <h1>About Us</h1>
      <div className="about-us-desc">
        <h3>Academic Review Management System (ARMS)</h3>
        <p>
          Welcome to the Academic Review Managment System (ARMS), a cutting-edge
          platform designed to revolutionize and optimize the academic review
          process at the Kulliyah of Information and Communication Technology
          (KICT) at the Internationl Islamic University Malaysia (IIUM). ARMS is
          meticulously crafted to address the unique challenges faced by faculty
          members, adminstratros, and students in managing and tracking the
          academic review lifecycle
        </p>
      </div>
      <br />
      <h1>Contact Us</h1>
      <table className="about-us-desc">
        <tr>
          <td>{/* <strong>University Name</strong> */}</td>
          <td>International Islamic University Malaysia</td>
        </tr>
        <tr>
          <td>
            <strong>Mailing Address</strong>
          </td>
          <td>
            <img width={12} src={location} alt="" /> P.O. Box 10, 50728 Kuala
            Lumpur
          </td>
        </tr>
        <tr>
          <td>
            <strong>Phone</strong>
          </td>
          <td>
            <img width={12} src={phone} alt="" /> (+603) 6421 6421
          </td>
        </tr>
        <tr>
          <td>
            <strong>Fax</strong>
          </td>
          <td>
            <img width={12} src={fax} alt="" /> (+603) 6421 4053
          </td>
        </tr>
        <tr>
          <td>
            <strong>Email Address</strong>
          </td>
          <td>
            <img width={12} src={mail} alt="" /> arms.iium@gmail.com
          </td>
        </tr>
      </table>
      <br />
      <h1>Developers</h1>
      <div className="about-us-desc">
        <p>
          Issak Ali Mahamat Kulliyyah: Kulliyyah of Information and
          Communication Technology (KICT)
          <br />
          Department: Bachelor of Information Technology (BIT)
          <br />
          Specialization: Business Intelligence And Information Science (BIIS)
        </p>
        <br />
        <p>
          Kanize Fathama Zinia Kulliyyah: Kulliyyah of Information and
          Communication Technology (KICT)
          <br />
          Department: Bachelor of Information Technology (BIT)
          <br />
          Specialization: Digital Media Design (DMD)
        </p>
      </div>
    </div>
  );
};

export default about_us;
