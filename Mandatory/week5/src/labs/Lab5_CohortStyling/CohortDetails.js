import React from "react";
import styles from "./CohortDetails.module.css";


function CohortDetails({ name, status, startDate, endDate }) {

  const headingColor = status.toLowerCase() === "ongoing" ? "green" : "blue";

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>{name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>End Date</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

function Lab5_CohortStyling() {
  const cohorts = [
    { name: "Java Full Stack - Batch 12", status: "Ongoing", startDate: "01-Jun-2026", endDate: "30-Sep-2026" },
    { name: "React Fundamentals - Batch 5", status: "Ongoing", startDate: "10-Jul-2026", endDate: "10-Oct-2026" },
    { name: "Cloud & DevOps - Batch 3", status: "Completed", startDate: "01-Jan-2026", endDate: "30-Apr-2026" },
    { name: "Data Engineering - Batch 2", status: "Completed", startDate: "05-Feb-2026", endDate: "05-May-2026" }
  ];

  return (
    <div>
      <h2>Academy Cohort Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default Lab5_CohortStyling;
