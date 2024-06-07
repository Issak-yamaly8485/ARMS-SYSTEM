import { iconsImgs, personsImgs } from "../utils/images";

export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    image: iconsImgs.home,
    link: "/home",
  },
  {
    id: 2,
    title: "BCS",
    image: iconsImgs.graduateHat,
    link: "/bcs",
  },
  {
    id: 3,
    title: "BIT",
    image: iconsImgs.graduateHat,
    link: "/bit",
  },
  {
    id: 4,
    title: "Template Curriculum Review",
    image: iconsImgs.plane,
    link: "/TCR",
  },
  {
    id: 5,
    title: "About Us",
    image: iconsImgs.about_us,
    link: "/about_us",
  },
  {
    id: 6,
    title: "Account",
    image: iconsImgs.user,
    link: "/account",
  },
  {
    id: 7,
    title: "Admins",
    image: iconsImgs.gears,
    link: "/admins",
  },
];

export const BITphases = [
  {
    phaseName: "Phase 1",
    phaseTitle: "Establishment of New Academic Programme",
    link: "phase1",
  },
  {
    phaseName: "Phase 2",
    phaseTitle: "Provisional Accreditation Process Flow",
    link: "phase2",
  },
  {
    phaseName: "Phase 3",
    phaseTitle: "Full Accreditation Process Flow",
    link: "phase3",
  },
  {
    phaseName: "Phase 4",
    phaseTitle: "Curriculum Review Process Flow",
    link: "phase4",
  },
  {
    phaseName: "Phase 5",
    phaseTitle: "New-cycle Accreditation/PMA Process Flow",
    link: "phase5",
  },
];

export const BITphase4_1 = [
  {
    title: "External Stakeholders",
    percentage: 47,
    page: "externalstakeholders",
  },
  {
    title: "Internal & External Assessors",
    percentage: 80,
    page: "assessors",
  },
  {
    title: "Survey",
    percentage: 23,
    page: "survey",
  },
  {
    title: "Benchmarking",
    percentage: 16,
    page: "benchmarking",
  },
  {
    title: "Programme Curriculum",
    tables: ["Workshop1", "Workshop2", "Workshop3"],
    percentage: 11,
    page: "programcurriculum",
  },
  {
    title: "Self-review and SWOT analysis",
    percentage: 21,
    page: "selfswot",
  },
  {
    title: "Curriculum review Proposal",
    percentage: 35,
    page: "crm",
  },
  {
    title: "Dokumen semakan",
    percentage: 97,
    page: "dokumensemakan",
  },
];

export const TimelineData = [
  {
    Date: "Friday, 24 Nov",
    Title: "Appointing Assessors",
    Desc: "Internal and External Assessor Appointments",
  },
  {
    Date: "Monday, 15 Jan",
    Title: "Self-Review Report Preparation",
    Desc: "Facultyy Members Prepare Self-Review Reports",
  },
  {
    Date: "Friday, 24 Nov",
    Title: "SWOT Analysis",
    Desc: "Conduct SWOT Analysis Workshops",
  },
];

export const DashboardInfo = [
  {
    Title: "Internal and external assesssors management",
    Percentage: 90,
  },
  {
    Title: "Preparing self-review report",
    Percentage: 60,
  },
];
