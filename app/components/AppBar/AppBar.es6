import React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import './AppBar.css';

export default React.createClass({
  
  displayName: "AppBar",
  
  getInitialState() {
    return {
      showIssueOptions: false
    };
  },

  _toggleIssueOptions() {
      this.setState({
        showIssueOptions: !this.state.showIssueOptions
      });
  },
  _setIssue(value){
      this.props.setIssueHandler(value);
      this._toggleIssueOptions();
  },
  

  render() {
    var { showIssueOptions} = this.state;
    var { setIssueHandler, currentIssue } = this.props

    var issueOptionClasses = classNames({
        "AppBar-issueOptions" : true,
        "is-show" : showIssueOptions
    });
    var toggleIcon = (showIssueOptions) ? "angle-up" : "angle-down";

    var issue_options = ["所有議題","勞工權益","婚姻平權","監督條例","罷免下修","食安","兩稅合一","核能"]
    var issueItems = issue_options.map((value, k)=>{
        var classses = classNames({
          "AppBar-issueOptionItem" : true,
          "is-active" : currentIssue === value
        })
        return <div className={classses}
                   key={k} 
                   onClick={this._setIssue.bind(null,value)}>{value}</div>
    });

  

    return (
      <div className="AppBar">
          <div className="AppBar-item">
               <Icon icon={"user"}/>
          </div>
          <div className="AppBar-title" 
               onClick={this._toggleIssueOptions}>
               <span className="AppBar-titleText">{currentIssue}</span>
               <Icon icon={toggleIcon}/></div>
          
          <div className={issueOptionClasses}>
              {issueItems}
             
          </div>

         

         
          
      </div>);
  }
});


