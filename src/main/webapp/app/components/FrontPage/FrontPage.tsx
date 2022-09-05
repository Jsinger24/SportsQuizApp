import React from 'react';
import NavBar from '../NavBar/NavBar';
import QuizBoard from '../QuizBoard/QuizBoard';
import WelcomeMessage from '../MainPage/MainPage';
import ScoreCounter from '../ScoreCounter/ScoreCounter';

interface FrontPageProps {
  score: number;
}

export default function FrontPage(props: FrontPageProps) {
  const { score } = props;
  return (
    <>
      <NavBar />
      <WelcomeMessage />
      <QuizBoard />
      <ScoreCounter score={score} />
    </>
  );
}
