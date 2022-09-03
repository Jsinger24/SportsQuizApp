import React, { useEffect, useState } from 'react';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import './styles.css';
import { Link } from 'react-router-dom';
import { getProfile } from 'app/shared/reducers/application-profile';
import { getSession } from 'app/shared/reducers/authentication';
import axios from 'axios';
import { useAppDispatch } from 'app/config/store';
import { forEach } from 'lodash';

export default function QuizBoard() {
  // const [question, setQuestion] = useState([])
  // const dispatch = useAppDispatch();
  // var testArr;

  // useEffect(() => {
  //   async function axiosTest() {
  //     const response = await axios.get('http://localhost:8080/question');
  //     testArr = response.data;
  //     console.log(testArr[0])
  //     setQuestion(testArr)
  //   }
  //   axiosTest();
  //   dispatch(getSession());
  //   dispatch(getProfile());
  // }, []);

  return (
    <div>
      <div className="quiz-board">
        {/* <label id="testLabel">error</label> */}
        <div className="categories">Hockey</div>
        <div className="categories">Baseball</div>
        <div className="categories">Football</div>
        <div className="categories">Basketball</div>

        <Link to="/QuestionPage">100 points</Link>
        <Link to="/QuestionPage">100 points</Link>
        <Link to="/QuestionPage">100 points</Link>
        <Link to="/QuestionPage">100 points</Link>

        <Link to="/QuestionPage">200 points</Link>
        <Link to="/QuestionPage">200 points</Link>
        <Link to="/QuestionPage">200 points</Link>
        <Link to="/QuestionPage">200 points</Link>

        <Link to="/QuestionPage">300 points</Link>
        <Link to="/QuestionPage">300 points</Link>
        <Link to="/QuestionPage">300 points</Link>
        <Link to="/QuestionPage">300 points</Link>

        <Link to="/QuestionPage">400 points</Link>
        <Link to="/QuestionPage">400 points</Link>
        <Link to="/QuestionPage">400 points</Link>
        <Link to="/QuestionPage">400 points</Link>

        <Link to="/QuestionPage">500 points</Link>
        <Link to="/QuestionPage">500 points</Link>
        <Link to="/QuestionPage">500 points</Link>
        <Link to="/QuestionPage">500 points</Link>
      </div>
      <ScoreCounter />
    </div>
  );
}
