import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import './App.css';

import Home from "./Home.js"
import Movies from "./Movies.js"
import MovieDetail from "./MovieDetail.js"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/movies" children={<Movies />} />
          <Route path="/movies/:id" children={<MovieDetail />} />
          <Route path="/" children={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}