import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

const Layout: FC = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

export default Layout;
