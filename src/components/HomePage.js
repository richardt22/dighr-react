import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="homepage">
    <h2>Committed to a pursuit of Global Health that seeks healthy people, healthy communities, and a healthy planet.</h2>
    <h3>Explore Our Research Themes</h3>
    
    <div className="row">
        <div className="col">
            <Link to="/planetaryhealth">Planetary Health</Link>
        </div>

        <div className="col">
            <Link to="/globalhealthhuman">Global Health Humanitarianism</Link>
        </div>

        <div className="col">
            <Link to="/globalhealthforesight">Global Health Forecasting</Link>
        </div>
    </div>
    
  </div>
);

export default HomePage;
