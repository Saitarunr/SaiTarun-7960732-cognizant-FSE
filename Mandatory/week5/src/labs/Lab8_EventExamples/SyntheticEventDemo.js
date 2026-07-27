import React from "react";

function SyntheticEventDemo() {
  const handlePress = (event) => {
    
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
