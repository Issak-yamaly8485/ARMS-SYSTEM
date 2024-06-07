import { tcrTemplate } from "../models/tcr.model.js";
import path from "path";
import fs from "fs";

const getAllTemplates = async (req, res) => {
  try {
    const templates = await tcrTemplate.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await tcrTemplate.findById(id);
    if (!document) {
      res.status(404).json({ message: "File Not Found" });
    }
    if (document) {
      const filePath = path.join("./uploads/templates", document.file);
      console.log("document.file", document.file);
      if (fs.existsSync(filePath)) {
        console.log(filePath, "File is here");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${document.file}`
        );
        res.setHeader("Content-Type", "application/octet-stream");
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } else {
        console.log("cannot find ", filePath);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addTemplate = async (req, res) => {
  try {
    const { templateName } = req.body;
    const file = req.file;
    function formatBytes(bytes) {
      if (bytes < 1024) {
        return bytes + " Bytes";
      } else if (bytes < 1048576) {
        return (bytes / 1024).toFixed(2) + " KB";
      } else if (bytes < 1073741824) {
        return (bytes / 1048576).toFixed(2) + " MB";
      } else {
        return (bytes / 1073741824).toFixed(2) + " GB";
      }
    }
    console.log("file", file);
    const template = new tcrTemplate({
      templateName,
      displayName: file?.originalname,
      file: file?.filename,
      filesize: formatBytes(file?.size),
    });

    const newTemplate = await template.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTemplateById = async (req, res) => {
  try {
    const template = await tcrTemplate.findByIdAndDelete(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }
    res.json({ message: "Template deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllTemplates, getTemplateById, addTemplate, deleteTemplateById };
