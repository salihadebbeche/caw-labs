import React, { useState } from 'react';
import '../TPStyles.css';

function CreateDivs() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (height && width && color) {
      setDivs([...divs, { height, width, color }]);
      setHeight('');
      setWidth('');
      setColor('');
    }
  }

  return (
    <div className="tp-block">
      <h2>Create Divs</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Height (px)"
          value={height}
          onChange={e => setHeight(e.target.value)}
          type="number"
        />
        <input
          placeholder="Width (px)"
          value={width}
          onChange={e => setWidth(e.target.value)}
          type="number"
        />
        <input
          placeholder="Color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>
      <div>
        {divs.map((d, idx) => (
          <div
            key={idx}
            className="tp-div-box"
            style={{
              height: d.height + "px",
              width: d.width + "px",
              background: d.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CreateDivs;
