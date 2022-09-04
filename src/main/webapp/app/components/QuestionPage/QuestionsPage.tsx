import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, Router, useLocation, useParams } from 'react-router-dom';
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

export default function QuestionPage() {
  const [question, setQuestion] = useState<QuestionProps>();
  const { category, difficulty } = useParams();

  // const dispatch = useAppDispatch();

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

  return (
    <div>
      <Navbar />
      <div>
        <h2>{question?.questionText}</h2>
      </div>

      <div className="info-container">
        <label>{category}</label>
        <label>{difficulty}</label>
      </div>

      <div className="question-container">
        <div className="choices-container">
          {question?.choices.map((element, counter) => {
            return (
              <div className={`choice${counter}`}>
                <input type="radio" id="html" name="fav_language" value={`choice${counter}`} />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
        <div className="choices-container">
          <div className="choice1">
            <input type="radio" id="html" name="fav_language" value="choice1" />
            <label>choice1</label>
          </div>
          <div className="choice2">
            <input type="radio" id="html" name="fav_language" value="choice1" />
            <label>choice2</label>
          </div>
          <div className="choice3">
            <input type="radio" id="html" name="fav_language" value="choice1" />
            <label>choice3</label>
          </div>
          <div className="choice4">
            <input type="radio" id="html" name="fav_language" value="choice1" />
            <label>choice4</label>
          </div>
        </div>
      </div>
      <ScoreCounter />
    </div>
  );
}
