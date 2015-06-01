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
      filterHeight: 0
    };
  },

  // componentDidMount(){
   
  //   var { inScheduleArea } = this.state;
  //   var { _setInScheduleArea, _setScheduleHeight, _setFilterHeight } = this;

   
  //   var top = this.refs.main.getDOMNode().offsetTop;

  //   // 這裏有點神秘
  //   var scheduleHeight = this.refs.schedule.getDOMNode().offsetHeight;
  //   var filterHeight = this.refs.filter.getDOMNode().offsetHeight;
  //   var height = scheduleHeight - window.innerHeight + filterHeight;
  //   console.log(height)

  //   _setScheduleHeight(height);
  //   _setFilterHeight(filterHeight);
  //   //

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

  

  render() {
   
    return (
      <div>
        <div className="Home-appBar">
          <AppBar/>
        </div>
        <div className="Home-content">
          <RecordList/>
        </div>
      </div>
    );
  }
});