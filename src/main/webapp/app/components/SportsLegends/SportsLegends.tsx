import React from 'react';
import Navbar from '../NavBar/NavBar';
import './styles.css';

export default function SportsLegends() {
  return (
    <div>
      <Navbar />
      <div className="sports-legends">
        <h1>Sports Legends</h1>
        <div className="legends-content">
          <div className="legend">
            <img src="http://www.opencourt-basketball.com/wp-content/uploads/2017/11/Michael-Jordan-Tongue.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Michael Jordan</h3>
              <li>number23</li>
              <li>chicago bulls</li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-10/edmonton-wayne-gretzky-031516-getty-ftrjpg_btjzlzxrrpec1covu0vtbck2u.jpg?itok=wuvihBE5"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Wayne Gretzky</h3>
              <li>number99</li>
              <li>Oilers</li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://www.si.com/.image/t_share/MTg2NjA2NDY0NTQ1MDcyOTg5/001261029.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Barry Bonds</h3>
              <li>san fran</li>
              <li>steriods?</li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://i.cbc.ca/1.5905150.1612757728!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/chiefs-buccaneers-super-bowl-football.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Tom Brady</h3>
              <li>number 12</li>
              <li>old</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
