import { Link } from 'react-router-dom';

import '@/pages/home/Home.scss';
import Categories from '@/pages/home/categories/Categories';
import { SCREENS_PATH } from '@/config/constant.ts';
import FeaturedCourses from '@/pages/home/featuredCourses/FeaturedCourses.tsx';

const Home = () => {
  return (
    <div className="w-full home-container">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-announce">
                <span className="dot animate-ping" />
                <span className="dot" />
                New: AI &amp; Machine Learning Track
              </div>
              <h1 className="hero-title">
                <span className="line1">Forge Your Future</span><br />
                with Expert-Led Courses
              </h1>
              <p className="hero-desc">
                Master in-demand skills with hands-on projects and real-world applications.
                Join 100,000+ professionals advancing their careers.
              </p>
              <div className="hero-cta">
                <Link to={SCREENS_PATH.HOME} className="btn btn-teal btn-lg shadow-lg">Browse Courses →</Link>
                <Link to={SCREENS_PATH.HOME} className="btn btn-outline btn-lg shadow-lg">View Pricing</Link>
              </div>
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" className="shadow-lg" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" className="shadow-lg" alt="" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" className="shadow-lg" alt="" />
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" className="shadow-lg" alt="" />
                </div>
                <span><strong>100K+</strong> learners</span>
                <div className="proof-sep" />
                <span><span className="proof-star">★</span> <strong>4.9</strong> avg. rating</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="float-card float-certificate shadow-lg p-4! flex items-center">
                <div className="float-card-header flex items-center shadow-lg">
                  <i className="fa-regular fa-check-circle" />
                </div>
                <div className="float-card-body p-2!">
                  <div className="float-text-main g-font-size-15">Certificate Earned!</div>
                  <div className="float-text-sub g-font-size-13">React Development Pro</div>
                </div>
              </div>

              <div className="hero-main-card">
                <div className="hero-card-img">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop" alt="AI Course" />
                </div>
                <div className="hero-card-body">
                  <div className="hero-card-tags">
                    <span className="pill pill-orange">Bestseller</span>
                    <span className="g-font-size-13" style={{ color: 'var(--text-muted)' }}>42 hours</span>
                  </div>
                  <div className="hero-card-title">Complete Machine Learning &amp; AI Bootcamp</div>
                  <div className="hero-card-instructor">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face" alt="Dr. Maya Chen" />
                    Dr. Maya Chen
                  </div>
                  <div className="hero-card-footer">
                    <div className="hero-card-rating"><span className="star-o">★</span> 4.96</div>
                    <span className="g-font-size-13" style={{ color: 'var(--text-muted)' }} />
                  </div>
                </div>
              </div>
              <div className="float-card float-progress shadow-lg p-4! flex items-center">
                <div className="float-card-header flex items-center shadow-lg">
                  <i className="fa-regular fa-arrow-trend-up" />
                </div>
                <div className="float-card-body p-2!">
                  <div className="float-text-main g-font-size-15">Skill Progress</div>
                  <div className="float-text-sub">
                    <div className="progress-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="stats-bar">
        <div className="container">
          <div className="stats-card shadow-lg">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-num">100K+</div>
                <div className="stat-label">Active Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">500+</div>
                <div className="stat-label">Expert Courses</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">95%</div>
                <div className="stat-label">Completion Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <FeaturedCourses />
    </div>);
};

export default Home;
export { Home as Component };
