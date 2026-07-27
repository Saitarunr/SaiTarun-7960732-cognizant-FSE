import React from "react";

// LAB 6: cricketapp - IndianPlayers
// Objective: Destructuring and the array merge (spread) feature of ES6
function IndianPlayers() {
  const oddTeamPlayers = ["Rohit Sharma", "Shubman Gill", "Rishabh Pant", "Ravindra Jadeja", "Mohammed Shami", "Kuldeep Yadav"];
  const evenTeamPlayers = ["Virat Kohli", "KL Rahul", "Hardik Pandya", "Axar Patel", "Jasprit Bumrah"];

  // Destructuring the first few players out of each array
  const [oddCaptain, oddViceCaptain, ...oddRest] = oddTeamPlayers;
  const [evenCaptain, evenViceCaptain, ...evenRest] = evenTeamPlayers;

  // Two more squads, merged using the ES6 spread (merge) feature
  const T20players = ["Suryakumar Yadav", "Yashasvi Jaiswal", "Arshdeep Singh"];
  const RanjiTrophyPlayers = ["Sarfaraz Khan", "Yash Dhull", "Rajat Patidar"];
  const mergedSquad = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h3>Odd Team Players</h3>
      <p>Captain: {oddCaptain}</p>
      <p>Vice-Captain: {oddViceCaptain}</p>
      <p>Rest of squad: {oddRest.join(", ")}</p>

      <h3>Even Team Players</h3>
      <p>Captain: {evenCaptain}</p>
      <p>Vice-Captain: {evenViceCaptain}</p>
      <p>Rest of squad: {evenRest.join(", ")}</p>

      <h3>Merged Squad (T20 + Ranji Trophy)</h3>
      <ul>
        {mergedSquad.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
