import React from 'react';
//import logo from './logo.svg';
import './Hi.css';

function Hi() {
  return <div className="App-header"> Hello <strong>Wajid Ali</strong><p>Lets see how an unordered list is rendered</p>
  <ul className="App-link">
    <li>Car</li>
    <li>Bike</li>
    <li>AeroPlane</li>
    <li>Boat</li>
    <li>{5+10}</li>
    </ul>
    </div>;
}

export default Hi;
