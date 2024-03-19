import React, { useState } from 'react';

    const lastName = await fetch('http://localhost:3000/api/auth/local/user/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
        })
      });

    const [firstName] = useState('');
    const [birthDate] = useState('');
    const [password] = useState('');
    const [email] = useState('');
    const [phoneNumber] = useState('');
    const [address] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h2>INFORMATIONS</h2>
            <label htmlFor="pseudo">Pseudo:</label>
            <input
                type="text"
                id="pseudo"
                value={lastName}
            />
            <br />
            <label htmlFor="identite">Identité:</label>
            <input
                type="text"
                id="identite"
                value={firstName}
            />
            <br />
            <label htmlFor="birthDate">Date de naissance:</label>
            <input
                type="date"
                id="birthDate"
                value={birthDate}
            />
            <br />
            <label htmlFor="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                value={password}
            />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                value={email}
            />
            <br />
            <label htmlFor="phoneNumber">Numéro de téléphone:</label>
            <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <label htmlFor="address">Adresse:</label>
            <textarea
                id="address"
                value={address}
            ></textarea>
            <br />
            <button type="submit">Envoyer</button>
        </form>
    );

export default UserInfo;