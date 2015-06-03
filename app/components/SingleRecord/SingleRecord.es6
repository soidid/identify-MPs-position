import React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import Record from "../Record/Record.es6";

import './SingleRecord.css';
import Data from "./SingleRecord";

export default React.createClass({
  
  displayName: "SingleRecord",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showSingleRecordHandler, showNGOPageHandler, currentRecord} = this.props;
    var data =  Data[currentRecord];
    console.log(data);
    var record = (data !== undefined)? <Record data={data} {...this.props}/>: "";
    return (
      <div className="SingleRecord">
          
          <button onClick={showSingleRecordHandler}>close</button>
          <br/>
          <br/>
          目前 record id: {currentRecord}
          {record}

          <br/>
          <br/>
          <button onClick={showNGOPageHandler}>NGO 簡介</button>
          
      </div>);
  }
});


