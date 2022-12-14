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
        <div className="categories">Hockey</div>
        <div className="categories">Baseball</div>
        <div className="categories">Football</div>
        <div className="categories">Basketball</div>

        <Link to="/QuestionPage/NHL/100">100 points</Link>
        <Link to="/QuestionPage/MLB/100">100 points</Link>
        <Link to="/QuestionPage/NFL/100">100 points</Link>
        <Link to="/QuestionPage/NBA/100">100 points</Link>

        <Link to="/QuestionPage/NHL/200">200 points</Link>
        <Link to="/QuestionPage/MLB/200">200 points</Link>
        <Link to="/QuestionPage/NFL/200">200 points</Link>
        <Link to="/QuestionPage/NBA/200">200 points</Link>

        <Link to="/QuestionPage/NHL/300">300 points</Link>
        <Link to="/QuestionPage/MLB/300">300 points</Link>
        <Link to="/QuestionPage/NFL/300">300 points</Link>
        <Link to="/QuestionPage/NBA/300">300 points</Link>

        <Link to="/QuestionPage/NHL/400">400 points</Link>
        <Link to="/QuestionPage/MLB/400">400 points</Link>
        <Link to="/QuestionPage/NFL/400">400 points</Link>
        <Link to="/QuestionPage/NBA/400">400 points</Link>

        <Link to="/QuestionPage/NHL/500">500 points</Link>
        <Link to="/QuestionPage/MLB/500">500 points</Link>
        <Link to="/QuestionPage/NFL/500">500 points</Link>
        <Link to="/QuestionPage/NBA/500">500 points</Link>
      </div>
    </div>
  );
}
