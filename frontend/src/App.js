//Router - look up Book Application tutorial to see how to import Router


import { SortingTable } from "./components/SortingTable";
import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './App.css';
import SubmitArticle from "./pages/Submit-Article";
import Home from "./pages/Home";

class App extends Component {
  render() {
    //set up JSX
    return (
      <Router>
        <div>

          <Route path="/view-article" component={SortingTable} />
          <h1>Software Engineering Practice Evidence Repository (SERPER)</h1>
          <ul className="header">
            <li><NavLink exact to ="/">Home</NavLink></li>
            <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
          <Route path = '/SubmitArticle' component={SubmitArticle}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
