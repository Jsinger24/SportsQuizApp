import React from 'react';
import Navbar from '../NavBar/NavBar';
import './styles.css';

export default function SportsLegends() {
  return (
    <div>
      <Navbar />
      <div className="sports-legends">
        <h1>Sports Legends of all-time</h1>
        <div className="legends-content">
          <div className="legend">
            <img src="http://www.opencourt-basketball.com/wp-content/uploads/2017/11/Michael-Jordan-Tongue.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Michael Jordan</h3>
              <li>Played for the Chicago Bulls (1984-1998) and the Washington Wizards (2001-2003</li>
              <li>Led the bulls to 6 NBA titles winning 3 titles in a row, twice</li>
              <li>Holds the record for career regualr season scoring average with 30.12 points per game</li>
              <li>The only player to win the MVP, Scoring Title, and defensive player of the year all in the SAME SEASON!</li>
              <li>10 total NBA scoring titles with a record (7) in a row!</li>
              <li>Holds record for most palyoff points in a single game (63) against the Boston Celtics 5/20/1986.</li>
              <li>Record 9 All-Defensive First Team award</li>
              <li>Named the 20th century's greatest North American athlete by ESPN</li>
              <li>Played Double-A baseball for the Chicago White Sox in 1994</li>
              <li>The only athlete who is currently a billionaire.</li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-10/edmonton-wayne-gretzky-031516-getty-ftrjpg_btjzlzxrrpec1covu0vtbck2u.jpg?itok=wuvihBE5"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Wayne Gretzky</h3>
              <li>
                Played for Edmonton Oilers (1978-1988) Los Angeles Kings (1988-1996) St. Loius Blues (1996) New York Rangers (1996-1999){' '}
              </li>
              <li>All time points leader in the NHL (2,857)</li>
              <li>All time goal scorer in the NHL (894)</li>
              <li>All time assist leader (1,963)</li>
              <li>Holds the reord for most Art Ross Trophies (most points in NHl at the end of season) in a career (9)</li>
              <li>Holds record for most goals in a season (92)</li>
              <li>Holds record for most assists in a season (163)</li>
              <li>Holds a record of 51-game point scoring streak</li>
              <li>Scored 50 goals in 39 games</li>
              <li>Holds or shares 61 NHL records</li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://www.si.com/.image/t_share/MTg2NjA2NDY0NTQ1MDcyOTg5/001261029.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Barry Bonds</h3>
              <li>Played for Pittsburg Pirates (1986-1992) & San Fransisco Giants (1993-2007)</li>
              <li>Holds record for the most career home runs (762) </li>
              <li>Has a record 7 NL MVP awards </li>
              <li>Holds the record for most home runs hit in a season (73) (2001) </li>
              <li>Holds record for the most career home runs (762) </li>
              <li>Has 12 Silver Slugger awards and 14 All-Star selections </li>
              <li>Holds the record for most intentional walks (688) </li>
              <li>The only player with at lest 500 home runs and 500 stolen bases </li>
              <li>Has 12 Silver Slugger awards and 14 All-Star selections </li>
              <li>Had his number retired (#25) by the San Fransisco Giants </li>
            </ul>
          </div>
        </div>

        <div className="legends-content">
          <div className="legend">
            <img src="https://i.cbc.ca/1.5905150.1612757728!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/chiefs-buccaneers-super-bowl-football.jpg"></img>
            <ul className="legend-info">
              <h3 className="legend-name">Tom Brady</h3>
              <li>Played for the New england Patriots from (2000-2019) & Tampa Bay Buccaneers (2020-present)</li>
              <li>7 time Super Bowl winner</li>
              <li>Holds record for most passing touchdowns by a QB (624 and counting)</li>
              <li>Holds record for most completions (7,263 and counting)</li>
              <li>Holds record for most passing yards (84,520 and counting) (</li>
              <li>Won 18 division titles</li>
              <li>Most wins by a starting QB (243 and counting)</li>
              <li>5 Pro Bowl appearences</li>
              <li>The only player to beat all 32 NFL teams</li>
              <li>Current career starting record 243-73-0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
