import React, { Component } from 'react';
import { Link } from 'react-router';
import FeatureCard from './FeatureCard';
import Info from './Info';

import linesImg from '../../img/linesicon.svg';
import trainsImg from '../../img/trainsicon.svg'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="HomeWrapper">
        <Info />
        <Link to="/arrivals">
          <FeatureCard
            featureName="Trains"
            imgSrc={trainsImg}
            active={true}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
