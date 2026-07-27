import React, { useState } from "react";
import "./App.css";

import Lab1_MyFirstReact from "./labs/Lab1_MyFirstReact/App";
import Lab2_StudentApp from "./labs/Lab2_StudentApp/App";
import Lab3_ScoreCalculator from "./labs/Lab3_ScoreCalculator/App";
import Lab4_BlogApp from "./labs/Lab4_BlogApp/App";
import Lab5_CohortStyling from "./labs/Lab5_CohortStyling/CohortDetails";
import Lab6_CricketApp from "./labs/Lab6_CricketApp/App";
import Lab7_OfficeSpaceRental from "./labs/Lab7_OfficeSpaceRental/App";
import Lab8_EventExamples from "./labs/Lab8_EventExamples/App";
import Lab9_TicketBooking from "./labs/Lab9_TicketBooking/App";
import Lab10_BloggerApp from "./labs/Lab10_BloggerApp/App";

const labs = [
  { id: 1, name: "Lab 1: myfirstreact", component: Lab1_MyFirstReact },
  { id: 2, name: "Lab 2: StudentApp", component: Lab2_StudentApp },
  { id: 3, name: "Lab 3: scorecalculatorapp", component: Lab3_ScoreCalculator },
  { id: 4, name: "Lab 4: blogapp (lifecycle hooks)", component: Lab4_BlogApp },
  { id: 5, name: "Lab 5: Cohort Styling (CSS Modules)", component: Lab5_CohortStyling },
  { id: 6, name: "Lab 6: cricketapp (ES6)", component: Lab6_CricketApp },
  { id: 7, name: "Lab 7: officespacerentalapp (JSX)", component: Lab7_OfficeSpaceRental },
  { id: 8, name: "Lab 8: eventexamplesapp", component: Lab8_EventExamples },
  { id: 9, name: "Lab 9: ticketbookingapp", component: Lab9_TicketBooking },
  { id: 10, name: "Lab 10: bloggerapp (conditional rendering)", component: Lab10_BloggerApp }
];

function App() {
  const [activeLab, setActiveLab] = useState(1);
  const ActiveComponent = labs.find((lab) => lab.id === activeLab).component;

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1>React Labs</h1>
        <nav>
          {labs.map((lab) => (
            <button
              key={lab.id}
              className={activeLab === lab.id ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveLab(lab.id)}
            >
              {lab.name}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">
        <ActiveComponent />
      </main>
    </div>
  );
}

export default App;
