import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAdmin } from '../context/AdminAuthContext';

const Admin = () => {
  const { logout } = useAdmin();
  const history = useHistory();
  const handleAdminLogout = async () => {
    try {
      await logout();
      history.push('/admin');
      console.log('logged out');
    } catch (err) {
      console.log('error in logging out');
    }
  };
  return (
    <div>
      <h1>Admin dashboard</h1>
      <button onClick={handleAdminLogout}>logout</button>
    </div>
  );
};

export default Admin;
