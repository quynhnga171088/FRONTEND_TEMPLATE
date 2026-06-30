import '@/pages/home/statsBar/StatsBar.scss';

const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-card shadow-lg">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-3 stat-item">
              <div className="stat-num">100K+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-3 stat-item">
              <div className="stat-num">500+</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-3 stat-item">
              <div className="stat-num">95%</div>
              <div className="stat-label">Completion Rate</div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-3 stat-item">
              <div className="stat-num">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default StatsBar;
