import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from "path";
import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

///ROUTES
import userRoutes from "./routes/user.routes.js";
import Phase4Routes from "./routes/phase4/phase4.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

////////////////////////////////////////////

app.use("/api/users", userRoutes);
app.use("/api/bit", Phase4Routes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on port", port);
});
