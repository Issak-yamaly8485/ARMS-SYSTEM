import React from "react";
import "./AnnouncmentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../../components/Modals/ConfirmationModal.jsx";

const AnnouncmentCard = ({ anonid, title, date, content, image, isAdmin }) => {
  async function handleDeleteAnnouncment(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/dashboard/announcements/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error("Failed to delete admin");
        throw new Error("Failed to delete admin");
      }
      toast.success("Announcement deleted successfully");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error(error.message);
    }
  }
  return (
    <div className="card-container">
      {isAdmin && (
        <ConfirmationModal
        
          anonStyle={true}
          style="anon-trash"
          icon={faCircleXmark}
          onConfirm={() => {
            handleDeleteAnnouncment(anonid);
          }}
        />
      )}
      <img className="card-image" src={image} />

      <main className="card-main-content">
        <a className="card-title" href="#">
          {title}
        </a>
        <h5 className="card-p">{date}</h5>
        <hr />
        <br />
        <p className="card-p">{content}</p>
      </main>
    </div>
  );
};

export default AnnouncmentCard;
