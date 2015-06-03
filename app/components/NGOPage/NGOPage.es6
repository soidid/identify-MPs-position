import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon.es6";
import "./NGOPage.css";

export default React.createClass({
  
  displayName: "NGOPage",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showNGOPageHandler} = this.props;
    return (
      <div className="NGOPage">
          
          <button onClick={showNGOPageHandler}>close</button>
          
      </div>);
  }
});


