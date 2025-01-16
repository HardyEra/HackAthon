import React from 'react';

const Dashboard = ({ role }) => {
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Hi! {username}, Welcome {role}</h1>
    </div>
  );
};

export default Dashboard;
