import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon.es6";
import './SingleRecord.css';

export default React.createClass({
  
  displayName: "SingleRecord",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showSingleRecordHandler} = this.props;
    return (
      <div className="SingleRecord">
          
          <button onClick={showSingleRecordHandler}>close</button>
          
      </div>);
  }
});


