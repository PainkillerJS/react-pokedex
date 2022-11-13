import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

const Layout: FC = () => (
  <>
    <Header />
    <div className='container p-8'>
      <Outlet />
    </div>
  </>
);

export default Layout;
