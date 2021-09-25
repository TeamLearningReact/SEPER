//Router - look up Book Application tutorial to see how to import Router

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SubmitArticle from './components/SubmitArticle';
import {SortingTable} from './components/SortingTable';

class App extends Component {

  render() {

    //set up JSX
    return(
      <Router>
        <div>
          <h2>This is the home page</h2>
          <Route path = '/submit-article' component={SubmitArticle} />
          <Route path = '/view-article' component={SortingTable} />
        </div>
      </Router>
    )

  }
}

export default App;
