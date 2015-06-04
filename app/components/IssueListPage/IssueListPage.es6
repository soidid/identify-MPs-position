import React from "react";
import classNames from "classnames";

import RightPageBar from "../RightPageBar/RightPageBar.es6";
import Icon from "../Icon/Icon.es6";
import Lexicon from "../Lexicon/Lexicon.es6";
import "./IssueListPage.css";
import Data from "./IssueListPage.js";

export default React.createClass({
  
  displayName: "IssueListPage",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showIssueListPageHandler, showNGOPageHandler, currentIssue, setIssueHandler} = this.props;
    var content = "";
    console.log(currentIssue);
    if(currentIssue === "所有議題"){
        var issues = Object.keys(Data).map((value,key)=>{
            return(
                <Lexicon data={Data[value]}
                         key={key}
                         setIssueHandler={setIssueHandler}/>
            )
        });
        content = (
          <div>
            <div className="IssuePage-intro">對議題不太了解嗎？沒關係，有長期關注議題的團體為你準備了深入淺出的懶人包！</div>
            {issues}
          </div>);
    }else{
        var data = Data[currentIssue];
        content = (
          <div>
              <div className="IssueListPage-title">{currentIssue}</div>
              <div className="IssueListPage-ngo" 
                   onClick={showNGOPageHandler}>BY {data.ngo}</div>

              <div>你為何該關心</div>
              <div>{data.why_you_should_care}</div>

              

              <div className="IssueListPage-link" 
                   onClick={setIssueHandler.bind(null, "所有議題")}>看其他議題</div>
          </div>
        )
    }
    // <div>BY <span onClick={showNGOPageHandler}>台灣勞工陣線</span></div>
    return (
      <div className="IssueListPage">
          <RightPageBar clickHandler={showIssueListPageHandler}
                        title={"議題小字典"}
                        icon={"remove"}/>
          
          <div className="IssueListPage-content">
            {content}
          </div>
         
      </div>);
  }
});


