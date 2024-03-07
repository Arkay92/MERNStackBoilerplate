import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../utils/authService';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authService.register({ username, password });
      history.push('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;