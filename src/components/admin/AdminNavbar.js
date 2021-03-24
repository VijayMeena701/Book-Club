import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAdmin } from '../../context/AdminAuthContext';

const useStyles = makeStyles(() => ({
  logout: {
    padding: '0.5rem 1rem',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    height: '100%',
    width: '10rem',
    fontSize: '1.25rem',
    background: 'none',
    transition: 'all 0.35s ease',
    '&:hover': {
      background: '#e9ecec',
    },
  },
  header: {
    width: '100%',
    background: '#f1f2f6',
    height: '8vh',
  },
  navContainer: {
    width: '90%',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#2c3e50',
    cursor: 'pointer',
  },
}));

const AdminNavbar = () => {
  const styles = useStyles();
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
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <h1 className={styles.headerTitle}>Admin DashBoard</h1>
        <button className={styles.logout} onClick={handleAdminLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
