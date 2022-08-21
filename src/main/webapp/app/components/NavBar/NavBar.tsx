import React from 'react';
import { Nav } from 'reactstrap';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/FunFacts">Fun Facts</Link>
      <Link to="/IconicImages">Iconic Images</Link>
      <Link to="/SportsLegends">Sports Legends</Link>
    </nav>
  );
}
