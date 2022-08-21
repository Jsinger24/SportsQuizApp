import React from 'react';
import Navbar from '../NavBar/NavBar';
import './styles.css';

export default function FunFacts() {
  return (
    <div>
      <Navbar />
      <h1>Fun Facts</h1>
      <ul className="fun-facts">
        <li>
          In the NHL points are aquired by goals and assists. If you took away every goal that Wayne Gretzky scored in his career, he would
          still have more points than any other player in NHL histoy!
        </li>
        <li>The average lifespan of a MLB baseball is only 5 to 7 pitches!</li>
        <li>Cal Ripken Jr. holds the record for most consecutive games played in a row with 2,632 </li>
        <li>The Tampa Bay Buccaneers hold the record for most losses in a row in the NFL with 26 consecutive losses!</li>
        <li>A standard NHL puck is 1 inch thick with a diameter of 3 inches and weighs 5.5 - 6 ounces</li>
        <li>The Boston Celtics won 8 straight NBA Championships in a row from 1959 to 1966 and also have 17 total NBA Championships</li>
        <li>
          The most points scored by a NHL player in one season is by Wayne Gretzky with 215 points. The next closest player? Also Wayne
          Gretzky with 212 points. He also holds the third and fourth most points scored in a season with 208 and 205 points!
        </li>
        <li>
          Barry Bonds was feared by teams so much for his ability to hit home runs that in 2004 he was intentionally walked by pitchers a
          record 232 times! In his career he was walked a total of 688 times!
        </li>
        <li>Brett Farve holds the record for most interceptions thrown by a QB with 336!</li>
        <li>
          On March 5th 2004 in a game between the Flyers and the Senators there was a brawl so bad that it took the refs 90 mins just to
          allocate penalties to both sides. There were a record 419 total penalty minutes asessed in the game!
        </li>
        <li>Wayne Gretzky won the MVP award 9 times in his career. Even more impressive, he won it 8 years in a row! </li>
        <li>The tallest NBA player to ever play was Sun Mingming standing at a staggering 7'9".</li>
      </ul>
    </div>
  );
}
