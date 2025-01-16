import React, { useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="manager">Manager</option>
        <option value="supervisor">Supervisor</option>
        <option value="worker">Worker</option>
      </select>
      <button type="submit">Signup</button>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </form>
  );
};

export default SignupForm;
