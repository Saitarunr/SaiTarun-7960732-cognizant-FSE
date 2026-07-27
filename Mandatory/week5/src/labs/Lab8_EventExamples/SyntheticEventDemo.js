import React from "react";

// LAB 8: eventexamplesapp - Synthetic Event
// Objective: React's SyntheticEvent wraps the browser's native event
function SyntheticEventDemo() {
  const handlePress = (event) => {
    // `event` here is a React SyntheticEvent, not the raw DOM event
    console.log("Synthetic event type:", event.type);
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handlePress}>Press Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEventDemo;
