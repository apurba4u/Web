import React from 'react';
import Header from '../components/shared/Header';
import NavBare from '../components/shared/NavBare';
import BreakingNews from '../components/shared/BreakingNews';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBare />
      {children}
    </div>
  );
};

export default MainLayout;