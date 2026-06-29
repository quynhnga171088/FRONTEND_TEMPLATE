import { Link } from 'react-router-dom';

import '@/pages/home/categories/Categories.scss';
import { SCREENS_PATH } from '@/config/constant.ts';

const Categories = () => {
  return (
    <section className="section categories">
      <div className="container">
        <div className="section-header-row">
          <div>
            <h2 className="section-title line1">Browse by Category</h2>
            <p className="section-desc">Explore 500+ courses across 8 specialized categories</p>
          </div>
          <a href="#" className="link-teal">
            View all categories →
          </a>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon green shadow-lg">
                <i className="fa-regular fa-code" />
              </div>
              <div className="cat-name font-size-15">Software Engineering</div>
              <div className="cat-desc">Build robust applications with modern programming languages and frameworks</div>
              <div className="cat-count">
                45 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon peach shadow-lg">
                <i className="fa-regular fa-palette-boxes" />
              </div>
              <div className="cat-name font-size-15">Creative Design</div>
              <div className="cat-desc">Master visual design, UI/UX, and creative tools</div>
              <div className="cat-count">
                32 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon red shadow-lg">
                <i className="fa-regular fa-bullhorn" />
              </div>
              <div className="cat-name font-size-15">Digital Marketing</div>
              <div className="cat-desc">Learn SEO, social media, and growth strategies</div>
              <div className="cat-count">
                28 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon blue shadow-lg">
                <i className="fa-regular fa-chart-line" />
              </div>
              <div className="cat-name font-size-15">Data &amp; Analytics</div>
              <div className="cat-desc">Analyze data and build predictive models</div>
              <div className="cat-count">
                36 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon purple shadow-lg">
                <i className="fa-regular fa-cloud" />
              </div>
              <div className="cat-name font-size-15">Cloud &amp; DevOps</div>
              <div className="cat-desc">Deploy and scale applications in the cloud</div>
              <div className="cat-count">
                24 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon yellow shadow-lg">
                <i className="fa-regular fa-handshake" />
              </div>
              <div className="cat-name font-size-15">Leadership &amp; Management</div>
              <div className="cat-desc">Develop essential leadership and team skills</div>
              <div className="cat-count">
                19 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="shadow-lg">
              <div className="cat-icon pink shadow-lg">
                <i className="fa-regular fa-block-brick-fire" />
              </div>
              <div className="cat-name font-size-15">Cybersecurity</div>
              <div className="cat-desc">Protect systems and networks from threats</div>
              <div className="cat-count">
                22 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 cat-card shadow-md">
            <Link to={SCREENS_PATH.HOME} className="">
              <div className="cat-icon teal shadow-lg">
                <i className="fa-regular fa-rocket" />
              </div>
              <div className="cat-name">Product Management</div>
              <div className="cat-desc">Build and launch successful digital products</div>
              <div className="cat-count">
                15 courses <i className="fa-regular fa-arrow-right" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
