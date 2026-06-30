import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '@/layouts/header/Header.scss';
import { SCREENS_PATH } from '@/config/constant';
import HeaderMenuModal from '@/lib/modal/HeaderMenuModal.tsx';

const Header = () => {
  const [isShowHeaderModal, setIsShowHeaderModal] = useState<boolean>(false);

  useEffect(() => {
    if (isShowHeaderModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isShowHeaderModal]);

  const closeHeaderModal = () => {
    setIsShowHeaderModal(false);
  };

  return <div className="header">
    <div className="container">
      <div className="header-inner">
        <Link to={SCREENS_PATH.HOME} className="logo">
          <div className="logo-icon">
            <i className="fa-thin fa-graduation-cap" />
          </div>
          Education
        </Link>
        <nav className="xs:hidden sm:hidden">
          <Link to={SCREENS_PATH.HOME}>Courses</Link>
          <Link to={SCREENS_PATH.HOME}>Categories</Link>
          <Link to={SCREENS_PATH.HOME}>Instructors</Link>
          <Link to={SCREENS_PATH.HOME}>Pricing</Link>
          <Link to={SCREENS_PATH.HOME}>About</Link>
        </nav>
        <div className="header-right">
          <button className="header-icon-btn ">
            <i className="fa-regular fa-search font-size-18" />
          </button>
          <button className="header-icon-btn">
            <i className="fa-regular fa-moon font-size-20" />
          </button>
          <div className="xs:hidden">
            <Link to={SCREENS_PATH.LOGIN} className="btn-signin">Sign in</Link>
            <Link to={SCREENS_PATH.COURSE_LIST} className="btn-header-cta">Get Started</Link>
          </div>
          <button className="header-icon-btn lg:hidden md:hidden" onClick={() => setIsShowHeaderModal(true)}>
            <i className="fa-regular fa-bars font-size-20" />
          </button>
        </div>
      </div>
    </div>
    {isShowHeaderModal && <HeaderMenuModal onClose={closeHeaderModal} />}
  </div>;
};

export default Header;
