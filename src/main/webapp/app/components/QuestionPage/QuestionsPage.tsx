import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, Router } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import QuizBoard from '../QuizBoard/QuizBoard';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import { useAppDispatch } from 'app/config/store';
import { getProfile } from 'app/shared/reducers/application-profile';
import { getSession } from 'app/shared/reducers/authentication';
import axios from 'axios';

export default function QuestionPage() {
  const [question, setQuestion] = useState([]);
  const dispatch = useAppDispatch();
  var testArr;

  useEffect(() => {
    async function axiosTest() {
      const response = await axios.get('http://localhost:8080/question');
      testArr = response.data;
      console.log(testArr);
      setQuestion(testArr);
    }
    axiosTest();
    dispatch(getSession());
    dispatch(getProfile());
  }, []);

  return (
    // {testArr}
    <div>
      <Navbar />
      {question.map((quest, i) => {
        return (
          <div>
            <h2>{quest['questionText']}</h2>
          </div>
        );
      })}
      <div className="info-container">
        <label>Category</label>
        <label>Points</label>
      </div>

      <div className="question-container">
        <h1>question-text</h1>
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
