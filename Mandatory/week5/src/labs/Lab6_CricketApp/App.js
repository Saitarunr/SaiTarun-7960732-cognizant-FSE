import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";


function Lab6_CricketApp() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Toggle View (flag = {String(flag)})</button>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default Lab6_CricketApp;
