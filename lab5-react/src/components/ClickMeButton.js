import React, { useState } from 'react';
import '../TPStyles.css';

function ClickMeButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="tp-block">
      <h2>ClickMe Button</h2>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

export default ClickMeButton;
