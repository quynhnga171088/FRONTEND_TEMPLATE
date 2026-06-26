import { Link } from 'react-router-dom';

import '@/layouts/header/Header.scss';
import { SCREENS_PATH } from '@/config/constant.ts';

const Header = () => {
  return <div className="header">
    <div className="container">
      <div className="header-inner">
        <Link to={SCREENS_PATH.HOME} className="logo">
          <div className="logo-icon">
            <i className="fa-thin fa-graduation-cap" />
          </div>
          Education
        </Link>
        <nav>
          <Link to={SCREENS_PATH.HOME}>Courses</Link>
          <Link to={SCREENS_PATH.HOME}>Categories</Link>
          <Link to={SCREENS_PATH.HOME}>Instructors</Link>
          <Link to={SCREENS_PATH.HOME}>Pricing</Link>
          <Link to={SCREENS_PATH.HOME}>About</Link>
        </nav>
        <div className="header-right">
          <button className="header-icon-btn">
            <i className="fa-regular fa-search" />
          </button>
          <button className="header-icon-btn">
            <i className="fa-regular fa-moon-stars" />
          </button>
          <Link to={SCREENS_PATH.LOGIN} className="btn-signin">Sign in</Link>
          <Link to={SCREENS_PATH.COURSE_LIST} className="btn-header-cta">Get Started</Link>
        </div>
      </div>
    </div>
  </div>;
};

export default Header;
export { Header as Component };
