import React from 'react';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import './styles.css';
import { Link } from 'react-router-dom';

export default function QuizBoard() {
  return (
    <div>
      <div className="quiz-board">
        <div className="categories">Hockey</div>
        <div className="categories">Baseball</div>
        <div className="categories">Football</div>
        <div className="categories">Basketball</div>

        <Link to="/HockeyQuestions 100-points">100 points</Link>
        <Link to="/BaseballQuestions 100-points">100 points</Link>
        <Link to="/FootballQuestions 100-points">100 points</Link>
        <Link to="/BasketballQuestions 100-points">100 points</Link>

        <Link to="/HockeyQuestions 200-points">200 points</Link>
        <Link to="/BaseballQuestions 200-points">200 points</Link>
        <Link to="/FootballQuestions 200-points">200 points</Link>
        <Link to="/BasketballQuestions 200-points">200 points</Link>

        <Link to="/HockeyQuestions 300-points">300 points</Link>
        <Link to="/BaseballQuestions 300-points">300 points</Link>
        <Link to="/FootballQuestions 300-points">300 points</Link>
        <Link to="/BasketballQuestions 300-points">300 points</Link>

        <Link to="/HockeyQuestions 400-points">400 points</Link>
        <Link to="/BaseballQuestions 400-points">400 points</Link>
        <Link to="/FootballQuestions 400-points">400 points</Link>
        <Link to="/BasketballQuestions 400-points">400 points</Link>

        <Link to="/HockeyQuestions 500-points">500 points</Link>
        <Link to="/BaseballQuestions 500-points">500 points</Link>
        <Link to="/FootballQuestions 500-points">500 points</Link>
        <Link to="/BasketballQuestions 500-points">500 points</Link>
      </div>
      <ScoreCounter />
    </div>
  );
}
