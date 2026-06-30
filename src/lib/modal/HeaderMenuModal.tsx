import '@/lib/modal/HeaderMenuModal.scss';
import { Link } from 'react-router-dom';
import { SCREENS_PATH } from '@/config/constant.ts';

const HeaderMenuModal = ({
  onClose
}: {
  onClose: () => void;
}) => {
  return (
    <div className="header-modal-overlay lg:hidden" onClick={onClose}>
      <div className="header-modal header-modal--wide" onClick={(e) => e.stopPropagation()}>
        <div className="header-modal-header">
          <div className="header-modal-title font-size-20">Menu</div>
          <button className="ccp-modal-close cursor-pointer" onClick={onClose}>
            <i className="fa-regular fa-xmark" />
          </button>
        </div>
        <div className="header-modal-body">
          <div className="can-field font-size-18">
            <Link to={SCREENS_PATH.HOME}>Courses</Link>
          </div>
          <div className="can-field">
            <Link to={SCREENS_PATH.HOME}>Categories</Link>
          </div>
          <div className="can-field">
            <Link to={SCREENS_PATH.HOME}>Instructors</Link>
          </div>
          <div className="can-field">
            <Link to={SCREENS_PATH.HOME}>Pricing</Link>
          </div>
          <div className="can-field">
            <Link to={SCREENS_PATH.HOME}>About</Link>
          </div>
        </div>
        <div className="header-modal-footer">
          <Link to={SCREENS_PATH.HOME} className="btn btn-outline btn-lg shadow-lg flex justify-center margin-bottom-7">Get started free</Link>
          <Link to={SCREENS_PATH.HOME} className="btn btn-teal btn-lg shadow-lg text-center flex justify-center">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuModal;
