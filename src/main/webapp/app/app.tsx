import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
// import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import Header from 'app/shared/layout/header/header';
import Footer from 'app/shared/layout/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';
import QuizQuestion from './components/QuizQuestion';
import NavBar from './components/NavBar/NavBar';
import CategoryBar from './components/CategoryBar/CategoryBar';
import WelcomeMessage from './components/MainPage/MainPage';
import QuizBoard from './components/QuizBoard/QuizBoard';
import FrontPage from './components/FrontPage/FrontPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IconicImages from './components/IconicImages/IconicImages';
import FunFacts from './components/FunFacts/FunFacts';
import SportsLegends from './components/SportsLegends';
const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSession());
    dispatch(getProfile());
  }, []);

  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FunFacts" element={<FunFacts />} />
        <Route path="/IconicImages" element={<IconicImages />} />
        <Route path="/SportsLegends" element={<SportsLegends />} />
      </Routes>
    </Router>
  );
};

export default App;
