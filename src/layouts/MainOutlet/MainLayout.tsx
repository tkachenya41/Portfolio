import { Outlet } from 'react-router-dom';

import { Menu } from '~/features/Menu/Menu';
import { Navbar } from '~/features/Navbar/Navbar';
import { ScrollToTop } from '~/shared/ui/ScrollToTop/ScrollToTop';

import MainStyle from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <>
      <div className={MainStyle.wrapper}>
        <div className={MainStyle.container}>
          <ScrollToTop></ScrollToTop>
          <Navbar />
          <main className={MainStyle.main}>
            <Menu appearance={MainStyle.menu} />
            <Outlet />
          </main>
        </div>
        <div className={MainStyle.footer}>© All Rights Reserved</div>
      </div>
    </>
  );
};
