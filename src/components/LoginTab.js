import React, { Component } from 'react';
import './LoginTab.css';

const LoginTab = ({form, children}) => {
  return (
    <main className="login-template">
      <div className="vCenterItems">
        For Login
        <button>Login</button>
      </div>
      
    </main>
  );
};

export default LoginTab;