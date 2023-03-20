import LoginComp from 'components/LoginComp/LoginComp';
import Logo from 'components/Logo/Logo';
import React from 'react';

const Login = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Logo />
      <LoginComp />
    </div>
  );
};

export default Login;
