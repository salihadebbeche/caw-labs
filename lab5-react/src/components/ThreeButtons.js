import React, { useState } from 'react';
import '../TPStyles.css';  // Chemin correct si le composant est dans src/components/

function ThreeButtons() {
  const [clicked, setClicked] = useState("");

  return (
    <div>
      <button onClick={() => setClicked("Button 1 was clicked")}>Button1</button>
      <button onClick={() => setClicked("Button 2 was clicked")}>Button2</button>
      <button onClick={() => setClicked("Button 3 was clicked")}>Button3</button>
      <p>{clicked}</p>
    </div>
  );
}

export default ThreeButtons;
