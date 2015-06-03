import React from "react";
import classNames from "classnames";

import RightPageBar from "../RightPageBar/RightPageBar.es6";
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
          <RightPageBar clickHandler={showIssuePageHandler}/>
          ISSUE PAGE
          <button onClick={showNGOPageHandler}>NGO 簡介</button>
      </div>);
  }
});


