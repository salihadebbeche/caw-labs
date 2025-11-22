import React, { useState } from 'react';
import '../TPStyles.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="tp-block">
      <h2>Compteur</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

export default Counter;
