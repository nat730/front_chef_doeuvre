import React, { useState } from 'react';
import '../css/connexion.css'
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

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
        <Label htmlFor="email">Email</Label>
        <Input type='email' name='email' value={identifier} placeholder='Email' onChange={handleIdentifierChange}></Input>
        <Label htmlFor='password'>Mot de passe</Label>
        <Input type='password' name='password' value={identifier} placeholder='Mot de passe' onChange={handlePasswordChange}></Input>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;
