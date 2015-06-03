import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon.es6";
import "./IssuePage.css";

export default React.createClass({
  
  displayName: "IssuePage",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showIssuePageHandler, showNGOPageHandler} = this.props;
    return (
      <div className="IssuePage">
          
          <button onClick={showIssuePageHandler}>close</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={showNGOPageHandler}>NGO 簡介</button>
      </div>);
  }
});


