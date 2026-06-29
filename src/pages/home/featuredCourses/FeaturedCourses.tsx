import { Link } from 'react-router-dom';

import '@/pages/home/featuredCourses/FeaturedCourses.scss';
import { SCREENS_PATH } from '@/config/constant';

const FeaturedCourses = () => {
  return (
    <section className="section courses">
      <div className="container">
        <div className="text-center margin-bottom-40">
          <span className="section-badge peach">
            <i className="fa-regular fa-star" /> Top Rated
          </span>
          <div className="section-title-boundary">
            <span className="section-title line1">Featured Courses</span>
          </div>
          <p className="section-desc">Hand-picked courses that deliver exceptional learning experiences and real-world skills</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="course-thumb">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop" alt="ML Course" />
                <div className="course-badges">
                  <span className="pill pill-orange">Bestseller</span>
                  <span className="pill pill-orange">Sale</span>
                </div>
                <div className="course-level-badge">
                  <span className="pill pill-white">Intermediate</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-cat line1">Data &amp; Analytics</div>
                <div className="course-title truncate">Complete Machine Learning &amp; AI Bootcamp</div>
                <div className="course-by">by Dr. Maya Chen</div>
                <div className="course-meta">
                  <span>
                    <i className="fa-thin fa-timer" /> 42 hours
                  </span>
                  <span>
                    <i className="fa-thin fa-books" /> 186 lessons
                  </span>
                  <span><i className="fa-thin fa-user-graduate" /> 32,500</span>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span className="star-o">★</span> 4.96 (4,823)
                  </div>
                  <div className="course-price">
                    <span className="price-now">$149</span>
                    <span className="price-was">$299</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="course-thumb">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop" alt="UX Course" />
                <div className="course-badges">
                  <span className="pill pill-orange">Sale</span>
                </div>
                <div className="course-level-badge">
                  <span className="pill pill-white">Advanced</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-cat line1">Creative Design</div>
                <div className="course-title truncate">Advanced UI/UX Design Masterclass</div>
                <div className="course-by">by Marcus Thompson</div>
                <div className="course-meta">
                  <span>
                    <i className="fa-thin fa-timer" /> 28 hours
                  </span>
                  <span>
                    <i className="fa-thin fa-books" /> 124 lessons
                  </span>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span className="star-o">★</span> 4.92 (2,156)
                  </div>
                  <div className="course-price">
                    <span className="price-now">$129</span>
                    <span className="price-was">$249</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="course-thumb">
                <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop" alt="React Course" />
                <div className="course-badges">
                  <span className="pill pill-orange">Bestseller</span>
                  <span className="pill pill-orange">Sale</span>
                </div>
                <div className="course-level-badge">
                  <span className="pill pill-white">Intermediate</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-cat line1">Software Engineering</div>
                <div className="course-title truncate">Full-Stack React &amp; Node.js Development</div>
                <div className="course-by">by Elena Rodriguez</div>
                <div className="course-meta">
                  <span>
                    <i className="fa-thin fa-timer" /> 52 hours
                  </span>
                  <span>
                    <i className="fa-thin fa-books" /> 234 lessons
                  </span>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span className="star-o">★</span> 4.94 (5,642)
                  </div>
                  <div className="course-price">
                    <span className="price-now">$169</span>
                    <span className="price-was">$349</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="course-thumb">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=240&fit=crop" alt="AWS Course" />
                <div className="course-badges">
                  <span className="pill pill-orange">Sale</span>
                </div>
                <div className="course-level-badge">
                  <span className="pill pill-white">Advanced</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-cat line1">Cloud &amp; DevOps</div>
                <div className="course-title truncate">AWS Solutions Architect Professional</div>
                <div className="course-by">by Priya Sharma</div>
                <div className="course-meta">
                  <span>
                    <i className="fa-thin fa-timer" /> 38 hours
                  </span>
                  <span>
                    <i className="fa-thin fa-books" /> 156 lessons
                  </span>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span className="star-o">★</span> 4.91 (2,945)
                  </div>
                  <div className="course-price">
                    <span className="price-now">$179</span>
                    <span className="price-was">$359</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 course-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="course-thumb">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=240&fit=crop" alt="Data Science" />
                <div className="course-badges">
                  <span className="pill pill-orange">Bestseller</span>
                  <span className="pill pill-orange">Sale</span>
                </div>
                <div className="course-level-badge">
                  <span className="pill pill-white">Beginner</span>
                </div>
              </div>
              <div className="course-body">
                <div className="course-cat line1">Data &amp; Analytics</div>
                <div className="course-title truncate">Data Science with Python: Complete Guide</div>
                <div className="course-by">by Dr. Maya Chen</div>
                <div className="course-meta">
                  <span>
                    <i className="fa-thin fa-timer" /> 48 hours
                  </span>
                  <span>
                    <i className="fa-thin fa-books" /> 212 lessons
                  </span>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span className="star-o">★</span> 4.95 (6,234)
                  </div>
                  <div className="course-price">
                    <span className="price-now">$139</span>
                    <span className="price-was">$279</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="courses-cta">
          <Link to={SCREENS_PATH.HOME} className="btn btn-outline btn-lg shadow-md">
            Browse All Courses <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
