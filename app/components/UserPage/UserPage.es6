import React from "react";
import classNames from "classnames";

import './UserPage.css';
import Data from "./UserPage";

export default React.createClass({
  
  displayName: "UserPage",
  
  getInitialState() {
    return {
      
    };
  },
  _contentOnClick(e){
   e.stopPropagation();
  },
  render() {
    var {showUserPageHandler} = window.innerWidth > 600 ? "":this.props;
    var userImg = require("./images/user.jpg");

    return (
      <div className="UserPage"
           onClick={showUserPageHandler}>
          <div className="UserPage-content"
               onClick={this._contentOnClick}>
               <div className="UserPage-top">
                    <div className="UserPage-userAvatar">
                        <img className="UserPage-userImg"
                             src={userImg}/>
                        <div className="UserPage-userText">Pei Jheng Lin</div>
                    </div>
               </div>
               <div className="UserPage-list">
                    <div className="UserPage-item">標記紀錄</div>
                    <div className="UserPage-item">設定</div>
                    <div className="UserPage-item">登出</div>
               </div>
          </div>
          
      </div>);
  }
});


