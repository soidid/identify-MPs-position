import React from "react";
import classNames from "classnames";

import RightPageBar from "../RightPageBar/RightPageBar.es6";
import Icon from "../Icon/Icon.es6";
import Lexicon from "../Lexicon/Lexicon.es6";
import "./IssuePage.css";
import Data from "./IssuePage.js";

export default React.createClass({
  
  displayName: "IssuePage",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showIssuePageHandler, showNGOPageHandler, currentIssue, setIssueHandler} = this.props;
    var content = "";
    if(currentIssue === "所有議題"){
        
    }else{
        var data = Data[currentIssue];
        content = (
          <div>
              <div className="IssuePage-title">{currentIssue}</div>
              <div>你為何該關心</div>
              <div>{data.why_you_should_care}</div>
          </div>
        )
    }
    // <div>BY <span onClick={showNGOPageHandler}>台灣勞工陣線</span></div>
    return (
      <div className="IssuePage">
          <RightPageBar clickHandler={showIssuePageHandler}
                        title={"議題小字典"}/>
          
          <div className="IssuePage-content">
            {content}
          </div>
         
      </div>);
  }
});


