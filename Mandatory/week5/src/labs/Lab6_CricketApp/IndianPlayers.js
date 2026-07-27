import React from "react";

function IndianPlayers() {
  const oddTeamPlayers = ["Rohit Sharma", "Shubman Gill", "Rishabh Pant", "Ravindra Jadeja", "Mohammed Shami", "Kuldeep Yadav"];
  const evenTeamPlayers = ["Virat Kohli", "KL Rahul", "Hardik Pandya", "Axar Patel", "Jasprit Bumrah"];

  const [oddCaptain, oddViceCaptain, ...oddRest] = oddTeamPlayers;
  const [evenCaptain, evenViceCaptain, ...evenRest] = evenTeamPlayers;

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
