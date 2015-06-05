import React from "react";
import classNames from "classnames";
import RightPageBar from "../RightPageBar/RightPageBar.es6";
import './HistoryPage.css';

export default React.createClass({
  
  displayName: "HistoryPage",
  
  getInitialState() {
    return {
      
    };
  },

  _onClick(){
    // this.props.showUserPageHandler();
    // this.props.showHistoryPageHandler();
    this.props.setCurrentRecordHandler(3);//3 is the id

  },

  render() {
    var {showHistoryPageHandler} = this.props;
    
    return (
      <div className="HistoryPage">
          <RightPageBar clickHandler={showHistoryPageHandler}
                         icon={"remove"}
                         title={"標記紀錄"}/>
          
          <div className="HistoryPage-record">
              <div>將管碧玲的質詢發言：「」標記為</div>
    
              <span className="HistoryPage-link" 
                    onClick={this._onClick}>
                    view post
              </span>
          </div>
      </div>);
  }
});


