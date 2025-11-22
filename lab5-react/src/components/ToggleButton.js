import React, { useState } from 'react';
import '../TPStyles.css';

function ToggleButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="tp-block">
      <h2>Toggle Button</h2>
      <button onClick={() => setCount(count + 1)}>ClickMe</button>
      <p>{count % 2 === 1 ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default ToggleButton;
