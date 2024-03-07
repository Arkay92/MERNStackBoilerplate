import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../utils/authService';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authService.login({ username, password });
      history.push('/protectedRoute'); // Redirect to a protected route after login
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
