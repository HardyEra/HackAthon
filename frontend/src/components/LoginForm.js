import React, { useState } from 'react';
import axios from '../services/api';  // Assuming axios is configured in a separate file
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      console.log('Login Response:', res);  // Log the response to check its structure
      localStorage.setItem('token', res.data.token);  // Save the token to local storage
      navigate(`/${res.data.role}`);  // Redirect based on the role
    } catch (error) {
      console.error('Login error:', error);  // Log the error object to check what went wrong
      setMessage(error.response?.data?.message || 'Login failed');  // Use optional chaining
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
