import React from "react";
import {Link} from "react-router";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import './PostBar.css';

export default React.createClass({
  
  displayName: "PostBar",
  
  getInitialState() {
    return {
      showIssueOptions: false
    };
  },

  _toggleIssueOptions() {
      this.setState({
        showIssueOptions: !this.state.showIssueOptions
      });
  },
  _setIssue(value){
      this.props.setIssueHandler(value);
      this._toggleIssueOptions();
  },
  

  render() {
    var { showIssueOptions} = this.state;
    var { showIssueListPageHandler, showUserPageHandler } = this.props


    return (
      <div className="PostBar">
          <Link className="PostBar-title" to="app">立場調查團</Link>
      </div>);
  }
});


