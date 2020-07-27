import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ApiPage from '../Api/ApiPage.jsx';
import DetailPage from '../Detail/DetailPage.jsx';
import Header from '../Header/Header.jsx';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ApiPage />
          </Route>
          <Route path="/DetailPage">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
