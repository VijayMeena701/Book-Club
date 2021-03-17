import React, { useEffect, useContext, useState } from 'react';
import { auth } from '../utils/firebase';

const AdminAuthContext = React.createContext();

export const useAdmin = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setAdmin(user);
      console.log(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const value = { admin, login, logout };
  return (
    <AdminAuthContext.Provider value={value}>
      {!loading && children}
    </AdminAuthContext.Provider>
  );
};
