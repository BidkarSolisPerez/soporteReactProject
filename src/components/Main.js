import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Support from "./Support";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/support">Support</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/support" component={Support}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
