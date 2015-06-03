import React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import './RightPageBar.css';

export default React.createClass({
  
  displayName: "RightPageBar",
  
 
  render() {
    var { clickHandler, title } = this.props;
    return (
      <div className="RightPageBar">
          <div className="RightPageBar-leftIcon"
               onClick={clickHandler}>
              <Icon icon={"chevron-left"}/>
          </div>
          <div className="RightPageBar-title">{title}</div>
      </div>);
  }
});


