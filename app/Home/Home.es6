import React from "react";
import classNames from "classnames";
import AppBar from "../components/AppBar/AppBar.es6";
import RecordList from "../components/RecordList/RecordList.es6";
import SingleRecord from "../components/SingleRecord/SingleRecord.es6";

import "./Home.css";
export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      showRighPage: false
    };
  },

  _toggleRightPage(){
    this.setState({
      showRighPage: !this.state.showRighPage
    })
  },

 
  _toggleFilterPanel() {
      this.setState({
        showFilterPanel: !this.state.showFilterPanel
      });
  },

  render() {
    var { showRighPage } = this.state;

    var homeClasses = classNames({
        "Home" : true,
        "is-hide" : showRighPage
    })
   
    var rightPageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showRighPage
    })
    return (
      <div className={homeClasses}>

        <div className="Home-main">
            <div className="Home-appBar">
              <AppBar filterPanelHandler={this._toggleFilterPanel}/>
            </div>
            <div className="Home-content">
              <RecordList showSingleRecordHandler={this._toggleRightPage}/>
            </div>
        </div>

        <div className={rightPageClasses}>
             <SingleRecord showSingleRecordHandler={this._toggleRightPage} />
        </div>



      </div>
    );
  }
});

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
