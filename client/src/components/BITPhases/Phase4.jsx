import React, { useEffect, useState } from "react";
import { BITphase4_1 } from "../../data/data";
import { Link } from "react-router-dom";
import PercentageLine from "../Percentage-Line/PercentageLine";
import "./BITphase.css";
const scopes = {
  externalStakeholder: {
    AnalysisReport: 0,
    EndorsementOfSenate: 0,
    NominationOfBoard: 0,
  },
  assessors: {
    EndorsementOfSenate2: 0,
    NominationOfBoard2: 0,
  },
  survey: {
    Alumni: 0,
    AnalysisReportSurvey: 0,
    Employer: 0,
    Student: 0,
  },
  benchMarking: {
    InstitutionVisit: 0,
    BenchmarkingAnalysis: 0,
  },
  programcurriculum: {
    Workshop1: 0,
    Workshop2: 0,
    Workshop3: 0,
  },
  selfswot: {
    AssessorFeedbackReport: 0,
    ReceiptofAssessorFeedbackReport: 0,
    SelfReviewReport: 0,
    SubmissionOfSelfReviewReport: 0,
  },
  crm: {
    CRM_EndorsementatKulliyyah: 0,
    CRM_EndorsementatSenate: 0,
    CRM_PreperationProposal: 0,
    CRM_Proposal: 0,
    CRM_ReviewByKCA1: 0,
    CRM_ReviewByKCA2: 0,
    EndorsementatAQAC_DCM: 0,
    RevisionofCRM: 0,
  },
  dokumensemakan: {
    DokumenReviewbyKCA: 0,
    JKPTEndorsement: 0,
    PreparationofDokumenSemakan: 0,
  },
};

function isDateAhead(dateString) {
  var currentDate = new Date();

  var parts = dateString.split("-");
  var year = parseInt(parts[0]);
  var month = parseInt(parts[1]) - 1;
  var day = parseInt(parts[2]);

  var givenDate = new Date(year, month, day);
  return currentDate > givenDate;
}

const Phase4 = () => {
  const [fetchedpercentages, setFetchedPercentages] = useState(null);

  const [percentages, setPercentages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bit/phase4");
        if (!response.ok) {
          throw new Error("Failed to fetch percentage data");
        }
        setFetchedPercentages(await response.json());
        console.log(fetchedpercentages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  for (const objKey in fetchedpercentages) {
    const obj = fetchedpercentages[objKey];
    if (obj.endDate) {
      const ahead = isDateAhead(obj.endDate); // Assuming endDate is a property of the object
      if (ahead) {
      }
      console.log(ahead);
    } else {
      console.log("object loop", obj);
    }
  }

  return (
    <div>
      <h1>Curriculum Review Process Flow</h1>
      <div className="phases-container">
        {BITphase4_1.map((phase, index) => (
          <React.Fragment key={index}>
            <div className="stage">
              <Link className="phase-span" to={`s${index + 1}`}>
                <span>
                  <p> {phase.title}</p>
                  <PercentageLine percentage={phase.percentage} />
                </span>
              </Link>
            </div>
            <div className="line" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Phase4;
