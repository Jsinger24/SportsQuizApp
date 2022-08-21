import React from 'react';
import NavBar from '../NavBar/NavBar';
import QuizBoard from '../QuizBoard/QuizBoard';
import WelcomeMessage from '../MainPage/MainPage';

export default function () {
  return (
    <>
      <NavBar />
      <WelcomeMessage />
      <QuizBoard />
    </>
  );
}
