import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/manager" element={<Dashboard role="Manager" />} />
        <Route path="/supervisor" element={<Dashboard role="Supervisor" />} />
        <Route path="/worker" element={<Dashboard role="Worker" />} />
      </Routes>
    </Router>
  );
};

export default App;
