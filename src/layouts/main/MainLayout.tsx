import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header/Header';
import { authStore } from '@/stores/auth.store';
import { ROLES_FOR_USER } from '@/config/constant';
import '@/layouts/main/MainLayout.scss';
import Footer from '@/layouts/footer/Footer.tsx';

const MainLayout = () => {
  const user = authStore(state => state.user);
  const logout = authStore(state => state.logout);

  /* Fix: logout() must not be called in render phase */
  const hasInvalidRole = user !== null && !Object.keys(ROLES_FOR_USER).includes(user.role);

  useEffect(() => {
    if (hasInvalidRole) logout();
  }, [hasInvalidRole, logout]);

  return (
    <div className="layout">
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
