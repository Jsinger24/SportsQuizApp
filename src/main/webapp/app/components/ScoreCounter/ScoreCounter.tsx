import React, { useState } from 'react';
import './styles.css';

interface ScoreCounterProps {
  score: number;
}

export default function ScoreCounter(props: ScoreCounterProps) {
  const { score } = props;

  return <div className="score-counter">SCORE: {score} </div>;
}
