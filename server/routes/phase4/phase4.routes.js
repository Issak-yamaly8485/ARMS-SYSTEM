import DokumenSemakanRoutes from "./DokumenSemakan.routes.js";
import ExternalStakeholdersRoutes from "./ExternalStakeholders.routes.js";
import assersorsRoutes from "./IntExtAssessors.routes.js";
import surveyRoutes from "./survey.routes.js";
import benchmarkingRoutes from "./benchmarking.routes.js";
import ProgrammeCurriculumRoutes from "./programCirriculum.routes.js";
import SelfswotRoutes from "./selfSWOT.routes.js";
import CRM_Routes from "./CRM.routes.js";
import { getAllPhase4 } from "../../controllers/CRUD.controller.js";
import express from "express";
const router = express.Router();

router.use("/dokumensemakan", DokumenSemakanRoutes);
router.use("/externalstakeholder", ExternalStakeholdersRoutes);
router.use("/assessors", assersorsRoutes);
router.use("/survey", surveyRoutes);
router.use("/benchmarking", benchmarkingRoutes);
router.use("/programcurriculum", ProgrammeCurriculumRoutes);
router.use("/selfswot", SelfswotRoutes);
router.use("/crm", CRM_Routes);

router.get("/phase4", getAllPhase4);

export default router;
