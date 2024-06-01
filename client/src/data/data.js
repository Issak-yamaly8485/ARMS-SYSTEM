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
    title: "Template Cirriclum Review",
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

export const transactions = [
  {
    id: 11,
    name: "Sarah Parker",
    image: personsImgs.person_four,
    date: "23/12/04",
    amount: 22000,
  },
  {
    id: 12,
    name: "Krisitine Carter",
    image: personsImgs.person_three,
    date: "23/07/21",
    amount: 20000,
  },
  {
    id: 13,
    name: "Irene Doe",
    image: personsImgs.person_two,
    date: "23/08/25",
    amount: 30000,
  },
];

export const reportData = [
  {
    id: 14,
    month: "Jan",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "Feb",
    value1: 45,
    value2: 60,
  },
  {
    id: 16,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Apr",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "May",
    value1: 45,
    value2: null,
  },
];

export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
];

export const subscriptions = [
  {
    id: 24,
    title: "LinkedIn",
    due_date: "23/12/04",
    amount: 20000,
  },
  {
    id: 25,
    title: "Netflix",
    due_date: "23/12/10",
    amount: 5000,
  },
  {
    id: 26,
    title: "DSTV",
    due_date: "23/12/22",
    amount: 2000,
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
    percentage:47,
    page:"boardofstudies"
  },
  {
    title: "Internal & External Assessors",
    percentage:80,
    page:"assessors"
  },
  {
    title: "Survey",
    percentage:23,
    page:"survey"
  },
  {
    title: "Benchmarking",
    percentage:16,
    page:"benchmarking"
  },
  {
    title: "Programme Curriculum",
    percentage:11,
    page:"programcurriculum"
  },
  {
    title: "Self-review and SWOT analysis",
    percentage:21,
    page:"selfswot"
  },
  {
    title: "Curriculum review Proposal",
    percentage:35,
    page:"crm"
  },
  {
    title: "Dokumen semakan",
    percentage:97,
    page:"dokumensemakan"
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
