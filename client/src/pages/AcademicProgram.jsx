import React from "react";
import ProgramCard from "../components/programCard/ProgramCard";
import '../components/programCard/ProgramCard.css'
const AcademicProgram = () => {
  return (
    <div className="program-container">
      <ProgramCard title="BIT" route="BIT"/>
      <ProgramCard title="BCS" route="BCS" />
    </div>
  );
};

export default AcademicProgram;
