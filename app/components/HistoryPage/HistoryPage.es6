import React from "react";
import {Link} from "react-router";
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
              <div className="HistoryPage-recordText">將管碧玲的質詢發言：「我們非常感到嚴重的擔憂，你們怎麼會連自己跟業者之間的相對位置都搞錯啊？」標記為「支持食品安全」。</div>
    
              <Link className="HistoryPage-link" to="post" params={{postID:1}}>
                    view post
              </Link>
          </div>
      </div>);
  }
});


