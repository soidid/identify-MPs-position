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
    var {showSingleRecordHandler, showNGOPageHandler} = this.props;
    return (
      <div className="SingleRecord">
          
          <button onClick={showSingleRecordHandler}>close</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={showNGOPageHandler}>NGO 簡介</button>
          
      </div>);
  }
});


