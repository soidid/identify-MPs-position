import React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import './AppBar.css';

export default React.createClass({
  
  displayName: "AppBar",
  
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
      <div className="AppBar">
          <div className="AppBar-item"
               onClick={showUserPageHandler}>
               <Icon icon={"user"}/>
          </div>
          

          <div className="AppBar-right">
              <div className="AppBar-item"
                   onClick={showIssueListPageHandler}>
                  <Icon icon={"book"}/>
              </div>
          </div>

         
          
      </div>);
  }
});


