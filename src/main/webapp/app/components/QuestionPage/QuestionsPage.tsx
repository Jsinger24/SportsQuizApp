import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, Router, useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import QuizBoard from '../QuizBoard/QuizBoard';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import { useAppDispatch } from 'app/config/store';
import { getProfile } from 'app/shared/reducers/application-profile';
import { getSession } from 'app/shared/reducers/authentication';
import axios from 'axios';

interface QuestionProps {
  questionText?: string;
  correctAnswer?: string;
  choices?: string[];
  category?: string;
  difficulty?: string;
}

interface QuestionPageProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionPage(props: QuestionPageProps) {
  const [question, setQuestion] = useState<QuestionProps>();
  const [userAnswer, setUserAnswer] = useState('');
  const { category, difficulty } = useParams();
  const { score, setScore } = props;
  const navigate = useNavigate();
  useEffect(() => {
    async function axiosTest() {
      // const response = await axios.get('http://localhost:8080/question');
      const response = await axios.get(`http://localhost:8080/question/${category}/${difficulty}`);
      const data = response.data;
      setQuestion({
        questionText: data.questionText,
        correctAnswer: data.correctAnswer,
        choices: data.choices,
        category: data.category,
        difficulty: data.difficulty,
      });
      console.log(question);
    }
    axiosTest();
    // // dispatch(getSession());
    // // dispatch(getProfile());
  }, []);

  function submitClick() {
    console.log(question.correctAnswer);
    if (userAnswer == question.correctAnswer) {
      setScore(score + parseInt(difficulty));

      console.log(score);
      alert('Correct, you gained ' + difficulty + ' points!');
    } else {
      setScore(score - parseInt(difficulty));
      console.log(score);
      alert('Try Again! You lost ' + difficulty + ' points! HAHA!');
    }
    navigate('/');
  }

  // function backToHome() {
  //   let navigate = useNavigate()
  //   navigate("/");
  // }

  const checkUserAnswer = event => {
    setUserAnswer(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="info-container">
        <label>{category}</label>
        <label>{difficulty}</label>
      </div>

      <div className="question-container">
        <div>
          <h2>{question?.questionText}</h2>
        </div>
        <div className="choices-container">
          {question?.choices.map((element, counter) => {
            return (
              <div className={`choice${counter}`}>
                <input
                  type="radio"
                  className="choices"
                  name="choices"
                  value={element}
                  checked={userAnswer === element}
                  onChange={checkUserAnswer}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
        {userAnswer}
        <button onClick={submitClick} className="submit-button">
          SUBMIT
        </button>
      </div>
      {/* <ScoreCounter info={{ score: score }} /> */}
    </div>
  );
}
