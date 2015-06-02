import React from "react";
import classNames from "classnames";
import AppBar from "../components/AppBar/AppBar.es6";
import RecordList from "../components/RecordList/RecordList.es6";

import "./Home.css";
export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      inScheduleArea: "before",
      scheduleHeight: 0,
      filterHeight: 0,
      showFilterPanel: false,
    };
  },

  // componentDidMount(){
   
  //   var { inScheduleArea } = this.state;
  //   var { _setInScheduleArea, _setScheduleHeight, _setFilterHeight } = this;

   
  //   var top = this.refs.main.getDOMNode().offsetTop;


  //   addEventListener("scroll", function() {
  //       console.log("->"+pageYOffset)
        
  //       if(pageYOffset > top){
  //           _setInScheduleArea("within");
  //       }
  //       if(pageYOffset < top){
  //          _setInScheduleArea("before");
  //       }
  //       if(pageYOffset > height){
  //          _setInScheduleArea("passed");
  //       }
  //   });

  // },
  
  _toggleFilterPanel() {
      this.setState({
        showFilterPanel: !this.state.showFilterPanel
      });
  },

  render() {
    var { showIssueOptions, currentIssue, showFilterPanel } = this.state;
    var filterPanelClasses = classNames({
        "AppBar-filterPanel" : true,
        "is-show" : showFilterPanel
    });
    return (
      <div>
        <div className="Home-appBar">
          <AppBar filterPanelHandler={this._toggleFilterPanel}/>
        </div>

        <div className="Home-content">
          
          <RecordList/>
        </div>
      </div>
    );
  }
});