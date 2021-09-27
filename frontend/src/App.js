//Router - look up Book Application tutorial to see how to import Router

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './App.css';

import SubmitArticleTo from './pages/ArticleSubmission';
import Home from "./pages/Home";

class App extends Component {

  render() {

    //set up JSX
    return(
      <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SERPER)</h1>
          <ul className="header">
            <li><NavLink exact to ="/">Home</NavLink></li>
            <p><li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li></p>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
          <Route path = '/SubmitArticle' component={SubmitArticleTo}/>
        </div>
        </div>
      </Router>
    )

  }
}

export default App;
