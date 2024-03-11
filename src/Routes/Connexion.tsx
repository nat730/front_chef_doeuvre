import React, { useState } from 'react';
import '../css/connexion.css'

const Connexion = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="connexion-container">
      <h1>Me Connecter</h1>
      <form className="id-container" onSubmit={handleLogin}>
        <label>
          Identifiant
        </label>
        <input
          type="text"
          name="identifier"
          value={identifier}
          onChange={handleIdentifierChange}
        />
        <label>
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;