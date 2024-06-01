import { AnnouncementSchema } from "../models/dashboard/announcement.model.js";
import { TimelineSchema } from "../models/dashboard/timeline.model.js";
const addAnnouncement = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const newAnnouncement = new AnnouncementSchema({
      title,
      content,
      image,
    });

    await newAnnouncement.save();

    res.status(201).json({
      message: "Announcement added successfully",
      announcement: newAnnouncement,
    });
  } catch (error) {
    console.error("Error adding announcement:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the announcement" });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await AnnouncementSchema.find();
    res.status(200).json(announcements);
  } catch (error) {
    console.error("Error fetching announcements:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching announcements" });
  }
};

const deleteAnnouncementById = async (req, res) => {
  const announcementId = req.params.id;
  try {
    const deletedAnnouncement = await AnnouncementSchema.findByIdAndDelete(
      announcementId
    );

    if (!deletedAnnouncement) {
      return res.status(404).json({ error: "Announcement not found" });
    }
    res.status(200).json({
      message: "Announcement deleted successfully",
      deletedAnnouncement,
    });
  } catch (error) {
    console.error("Error deleting announcement:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the announcement" });
  }
};

const getAllTimeline = async (req, res) => {
  try {
    const timelineList = await TimelineSchema.find();
    res.status(200).json(timelineList);
  } catch (error) {
    console.error("Error fetching timeline data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching timeline data" });
  }
};

export {
  addAnnouncement,
  getAllAnnouncements,
  deleteAnnouncementById,
  getAllTimeline,
};
