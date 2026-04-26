import React from 'react';
import NavBare from '../components/shared/NavBare';
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
  // montserrat font use layout file teikka
  return (
    <div className={`${montserrat.className}`}>
      <NavBare />
      {children}
    </div>
  );
};

export default AuthLayout;