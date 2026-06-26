import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header/Header';
import { authStore } from '@/stores/auth.store';
import {
  ROLES_FOR_USER
  // SCREENS_PATH
} from '@/config/constant';

const MainLayout = () => {
  // const isAuthenticated = authStore(state => state.isAuthenticated);
  const logout = authStore(state => state.logout);
  const user = authStore(state => state.user);

  /* Fix: logout() must not be called in render phase */
  const hasInvalidRole = !!user && !Object.keys(ROLES_FOR_USER).includes(user.role);
  useEffect(() => {
    if (hasInvalidRole) logout();
  }, [hasInvalidRole, logout]);

  // if (!isAuthenticated || !user || hasInvalidRole) {
  //   return <Navigate to={SCREENS_PATH.LOGIN} replace />;
  // }

  return (
    <div className="layout">
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <Outlet/>
        </div>
      </div>
      {/*<ModalWrapper />*/}
      {/*<ModalProcessing />*/}
      {/*<Footer />*/}
    </div>);
};
export default MainLayout;
