import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAdmin } from '../context/AdminAuthContext';

const AdminLogin = () => {
  const history = useHistory();
  const { login, admin } = useAdmin();
  const [values, setValues] = useState({
    email: 'bookclub.iiitdmk@gmail.com',
    password: 'BookClub@1234',
  });

  useEffect(() => {
    if (admin) history.push('/admin/dashboard');
  }, [admin, history]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      await login(values.email, values.password);
      console.log('logged in as admin');
    } catch (error) {
      console.log('error in logging in as admin');
    }
  };

  return (
    <div>
      <form onSubmit={handleAdminLogin}>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
