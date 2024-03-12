import React, { useCallback, useState } from 'react';
import '../css/globals.css'
import '../css/connexion.css'
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

const Connexion = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = useCallback(async() => {
    const response = await fetch('http://localhost:3000/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await response.json();
    if(data) {
      navigate('/')
    }
    else {
      setIdentifier('')
      setPassword('')
    }
  }, [navigate, identifier, password])

  const handleSignInClick = useCallback(() => {
    navigate('/inscription');
  }, [])

  return (
    <div className="cards-container">
      <Card className="connexion-card">
        <CardTitle className='text-center'>Drive Solidaire</CardTitle>
        <CardDescription className='card-description text-center'>Connectez-vous pour accéder à votre espace personnel</CardDescription>
        <CardContent>
          <Input
            type='email'
            name='email'
            value={identifier}
            placeholder='Email'
            onChange={handleIdentifierChange}
          />
          <Input
            type='password'
            name='password'
            value={password}
            placeholder='Mot de passe'
            onChange={handlePasswordChange}
          />
        </CardContent>
        <CardFooter
          className="connexion-card"
        >
          <Button
            type="submit"
            onClick={handleLogin}
            className='mb-3'
          >Me connecter
          </Button>
          <p>Pas encore de compte ?</p>
          <Button variant='ghost' className='font-semibold' onClick={handleSignInClick}>Créer mon compte</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Connexion;
