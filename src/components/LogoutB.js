import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './capp.css';

const LogoutB = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button className="login-button" onClick={() => logout()}>
        Log Out
      </button>
    )
  );
};

export default LogoutB;
