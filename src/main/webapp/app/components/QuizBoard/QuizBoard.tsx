import React from 'react';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import './styles.css';

export default function QuizBoard() {
  return (
    <div>
      <div className="quiz-board">
        <div className="categories">Hockey</div>
        <div className="categories">Baseball</div>
        <div className="categories">Football</div>
        <div className="categories">Basketball</div>
        <div className="ten-points">10 Points</div>
        <div className="ten-points">10 Points</div>
        <div className="ten-points">10 Points</div>
        <div className="ten-points">10 Points</div>
        <div className="twenty-points">20 Points</div>
        <div className="twenty-points">20 Points</div>
        <div className="twenty-points">20 Points</div>
        <div className="twenty-points">20 Points</div>
        <div className="thirty-points">30 points</div>
        <div className="thirty-points">30 points</div>
        <div className="thirty-points">30 points</div>
        <div className="thirty-points">30 points</div>
        <div className="forty-points">40 points</div>
        <div className="forty-points">40 points</div>
        <div className="forty-points">40 points</div>
        <div className="forty-points">40 points</div>
      </div>
      <ScoreCounter />
    </div>
  );
}
