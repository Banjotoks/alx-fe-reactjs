import React, { useState } from 'react'

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!username || !email || !password) {
            setError('It requires all field.');
            return;
        }
        setError('');
        
    }


  return (

    <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>

        <div>
            <label>Email</label>
            <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label>Password</label>
            <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        </form>
  );
}; 

export default RegistrationForm