import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Rohit Sharma", score: 85 },
    { name: "Virat Kohli", score: 92 },
    { name: "Shubman Gill", score: 60 },
    { name: "KL Rahul", score: 55 },
    { name: "Rishabh Pant", score: 78 },
    { name: "Hardik Pandya", score: 65 },
    { name: "Ravindra Jadeja", score: 40 },
    { name: "Axar Patel", score: 30 },
    { name: "Mohammed Shami", score: 15 },
    { name: "Jasprit Bumrah", score: 10 },
    { name: "Kuldeep Yadav", score: 20 }
  ];

  // Arrow function used with filter() - ES6
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h3>All 11 Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
