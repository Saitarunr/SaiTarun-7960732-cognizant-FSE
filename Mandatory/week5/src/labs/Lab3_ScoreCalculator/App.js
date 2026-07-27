import React from "react";
import CalculateScore from "./Components/CalculateScore";

// LAB 3: scorecalculatorapp
// Objective: Create a function component, apply styles, render it
function Lab3_ScoreCalculator() {
  return (
    <div>
      <CalculateScore name="Ravi Kumar" school="RMK Engineering College" total={430} goal={5} />
    </div>
  );
}

export default Lab3_ScoreCalculator;
