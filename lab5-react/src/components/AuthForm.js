import React, { useState } from 'react';
import '../TPStyles.css';

function AuthForm() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password }]);
      setUsername('');
      setPassword('');
    }
  }

  return (
    <div className="tp-block">
      <h2>Formulaire Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {users.map((user, idx) =>
          <li key={idx}>
            {user.username} ({user.password})
            <button onClick={() => setUsers(users.filter((_, i) => i !== idx))}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default AuthForm;
