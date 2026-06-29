import { Link } from 'react-router-dom';

import '@/pages/home/instructors/Instructors.scss';
import { SCREENS_PATH } from '@/config/constant.ts';

const Instructors = () => {

  return (
    <section className="section instructors">
      <div className="container">
        <div className="text-center margin-bottom-40">
          <div className="section-badge">
            <i className="fa-regular fa-brain" /> Expert Team
          </div>
          <div className="">
            <span className="section-title line1">Learn from Industry Leaders</span>
          </div>
          <p className="section-desc">Our instructors are practitioners from top companies who bring real-world experience to every lesson</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md instructor-card">
            <Link to={SCREENS_PATH.HOME}>
              <div className="instructor-avatar-wrap">
                <img className="instructor-avatar" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=face" alt="Dr. Maya Chen" />
                <div className="instructor-check">✓</div>
              </div>
              <div className="instructor-name">Dr. Maya Chen</div>
              <div className="instructor-role">AI Research Scientist &amp; Educator</div>
              <div className="instructor-meta">
                <span>
                  <i className="fa-thin fa-star star-o" /> 4.96
                </span>
                <span>8 courses</span>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md instructor-card">
            <Link to={SCREENS_PATH.HOME}>
              <div className="instructor-avatar-wrap">
                <img className="instructor-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face" alt="Marcus Thompson" />
                <div className="instructor-check">✓</div>
              </div>
              <div className="instructor-name">Marcus Thompson</div>
              <div className="instructor-role">Senior Product Designer</div>
              <div className="instructor-meta">
                <span>
                  <i className="fa-thin fa-star star-o" /> 4.92
                </span>
                <span>6 courses</span>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md instructor-card">
            <Link to={SCREENS_PATH.HOME}>
              <div className="instructor-avatar-wrap">
                <img className="instructor-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face" alt="Elena Rodriguez" />
                <div className="instructor-check">✓</div>
              </div>
              <div className="instructor-name">Elena Rodriguez</div>
              <div className="instructor-role">Full-Stack Architect &amp; Tech Lead</div>
              <div className="instructor-meta">
                <span>
                  <i className="fa-thin fa-star star-o" /> 4.94
                </span>
                <span>10 courses</span>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md instructor-card">
            <Link to={SCREENS_PATH.HOME}>
              <div className="instructor-avatar-wrap">
                <img className="instructor-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face" alt="James Okonkwo" />
                <div className="instructor-check">✓</div>
              </div>
              <div className="instructor-name">James Okonkwo</div>
              <div className="instructor-role">Growth Marketing Director</div>
              <div className="instructor-meta">
                <span>
                  <i className="fa-thin fa-star star-o" /> 4.89
                </span>
                <span>5 courses</span>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md instructor-card">
            <Link to={SCREENS_PATH.HOME}>
              <div className="instructor-avatar-wrap">
                <img className="instructor-avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face" alt="Priya Sharma" />
                <div className="instructor-check">✓</div>
              </div>
              <div className="instructor-name">Priya Sharma</div>
              <div className="instructor-role">Cloud Solutions Architect</div>
              <div className="instructor-meta">
                <span>
                  <i className="fa-thin fa-star star-o" /> 4.91
                </span>
                <span>7 courses</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="instructors-cta">
          <Link to={SCREENS_PATH.HOME} className="btn btn-outline btn-lg shadow-md">
            View all instructors <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
