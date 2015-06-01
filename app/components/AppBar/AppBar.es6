import React from "react";
import { Link } from "react-router";

import Icon from "../Icon/Icon.es6";
import './AppBar.css';

export default class AppBar extends React.Component {
  static getProps(stores, params) {
    var transition = stores.Router.getItem("transition");
    return {
        loading: !!transition
    };
  }

  render() {
  
   
    return (
      <div className="AppBar">
          <div className="AppBar-item">
               <Icon icon={"user"}/>
          </div>
          <div className="AppBar-title">所有議題<Icon icon={"angle-down"}/></div>
          <div className="AppBar-item AppBar-right">
               <Icon icon={"cog"}/>
          </div>
          
      </div>);
  }
}


