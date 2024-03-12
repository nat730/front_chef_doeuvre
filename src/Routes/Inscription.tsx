import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  }

  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(parseInt(e.target.value));
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleInscriptionClick = useCallback(
    async() => {
      const response = await fetch('http://localhost:1337/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname,
          lastname,
          phone,
          email,
          password
        })
      });
      const data = await response.json();
      if(data) {
        console.log(data);
        navigate('/')
      }
      else {
        setFirstname('');
        setLastname('');
        setPhone(0);
        setEmail('');
        setPassword('');
      }
    }, []);


  return (
    <div className="cards-container">
    <Card className="connexion-card">
      <CardTitle className='text-center'>Drive Solidaire</CardTitle>
      <CardDescription className='card-description text-center'>Créer un compte</CardDescription>
      <CardContent>
        <Input
          type='firstname'
          name='firstname'
          value={firstname}
          placeholder='Prénom'
          onChange={handleFirstnameChange}
          className="margin-bottom-3"
        />
        <Input
          type='lastname'
          name='lastname'
          value={lastname}
          placeholder='Nom'
          onChange={handleLastnameChange}
          className="margin-bottom-3"
        />
        <Input
          type='phone'
          name='phone'
          value={phone}
          placeholder='N° de téléphone'
          onChange={handlePhoneChange}
          className="margin-bottom-3"
        />
        <Input
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleEmailChange}
          className="margin-bottom-3"
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
          onClick={handleInscriptionClick}
          className='mb-3'
        >M'inscrire
        </Button>
        <p>Déjà un compte ?</p>
        <Button variant='ghost' className='font-semibold'>Se connecter</Button>
      </CardFooter>
    </Card>
    </div>
  )
};

export default Inscription;
