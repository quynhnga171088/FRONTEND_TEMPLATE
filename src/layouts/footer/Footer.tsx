import { Link } from 'react-router-dom';

import '@/layouts/footer/Footer.scss';
import { SCREENS_PATH } from '@/config/constant.ts';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to={SCREENS_PATH.HOME} className="logo">
              <div className="logo-icon">
                <i className="fa-regular fa-graduation-cap" />
              </div>
              Education
            </Link>
            <p className="footer-brand-desc">Forge Your Future. Transform your career with expert-led courses trusted by 100,000+ learners worldwide.</p>
          </div>
          <div>
            <div className="footer-col-title">Categories</div>
            <ul className="footer-links">
              <li><Link to={SCREENS_PATH.HOME}>Software Engineering</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Creative Design</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Digital Marketing</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Data &amp; Analytics</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Cloud &amp; DevOps</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Support</div>
            <ul className="footer-links">
              <li><Link to={SCREENS_PATH.HOME}>Help Center</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>FAQ</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Accessibility</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><Link to={SCREENS_PATH.HOME}>Terms of Service</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Privacy Policy</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Cookie Policy</Link></li>
              <li><Link to={SCREENS_PATH.HOME}>Licenses</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 SkillForge. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link to={SCREENS_PATH.HOME}>Terms</Link>
            <Link to={SCREENS_PATH.HOME}>Privacy</Link>
            <Link to={SCREENS_PATH.HOME}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>);
};

export default Footer;
