import React from 'react';
import Header from '../../components/Header';
import AuthenticationTabs from '../../components/AuthenticationTabs';

const AuthenticationPage = () => {
  return (
    <div className='authentication-page'>
      <Header />
      <AuthenticationTabs />
    </div>
  );
};

export default AuthenticationPage;