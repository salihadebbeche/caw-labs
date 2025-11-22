import React, { useState } from 'react';
import '../TPStyles.css';

function DisplayTab({ tab }) {
  const [items, setItems] = useState(tab);

  return (
    <div className="tp-block">
      <h2>Afficher la liste</h2>
      <ul>
        {items.map((item, idx) =>
          <li key={idx} onClick={() => setItems(items.filter((_, i) => i !== idx))}>
            Element {idx + 1} est {item}
          </li>
        )}
      </ul>
      <small>Clique sur un élément pour le supprimer</small>
    </div>
  );
}

export default DisplayTab;
