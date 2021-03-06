import React from "react";
import classNames from "classnames";

import RightPageBar from "../RightPageBar/RightPageBar.es6";
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
          <RightPageBar clickHandler={showNGOPageHandler}
                        icon={"chevron-left"}/>
          
          <div className="NGOPage-content">這裡放 NGO 的介紹</div>
          
      </div>);
  }
});


