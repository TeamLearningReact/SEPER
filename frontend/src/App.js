//Router - look up Book Application tutorial to see how to import Router

import { SortingTable } from "./components/SortingTable";
import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./App.css";
import SubmitArticleTo from "./pages/ArticleSubmission";
import Home from "./pages/Home";

class App extends Component {
  render() {
    //set up JSX
    return (
      <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
          <ul className="header">
            {/* <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li> */}{" "}
            <p style={{ color: "green" }}>
              <p style={{ fontSize: 20 }}>
                Have you ever wonder if practices such as TDD (Test Driven
                Development) indeed do help you to develop better software
                applications? Well click on the link below to find out!
              </p>
              {/* <span style={{ padding: 30 }}> </span> */}
              <button>
                <NavLink to="/view-article">SE Practice</NavLink>
              </button>
            </p>
            <p style={{ color: "green" }}>
              <p style={{ fontSize: 23 }}>
                {" "}
                Do you have the an article which you think it should be here? If
                so, click below!
              </p>
              <button>
                <NavLink to="/SubmitArticle">Submit an Article</NavLink>
              </button>
            </p>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/SubmitArticle" component={SubmitArticleTo} />
            <Route path="/view-article" component={SortingTable} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
