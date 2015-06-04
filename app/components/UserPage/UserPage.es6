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
    var {showUserPageHandler} = this.props;
    return (
      <div className="UserPage"
           onClick={showUserPageHandler}>
          <div className="UserPage-content"
               onClick={this._contentOnClick}>
               User Page
          </div>
          
      </div>);
  }
});


