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
      showRighPage: false,
      currentScrollHeight: 0
    };
  },

  _toggleRightPage(){
    

    this.setState({
      showRighPage: !this.state.showRighPage
    })
    if(!this.state.showRighPage){
      console.log("Saving:" + pageYOffset);
      this.setState({
        currentScrollHeight: pageYOffset - 20
      })

    }
    //else{
    //   console.log("Recovering:"+this.state.currentScrollHeight);

    //   //window.scrollTo(this.state.currentScrollHeight, 0);
    //   window.scrollTo(100,500);
    // }
    window.scrollTo(0,500);
  },
  componentDidUpdate(){
    console.log("did update")
    var {currentScrollHeight, showRighPage} = this.state;
    if(currentScrollHeight!==0 && showRighPage === false){
       console.log("NOT zero")
       window.scrollTo(0, currentScrollHeight);
       this.setState({
        currentScrollHeight: 0
      })

    }


  },

 
  _toggleFilterPanel() {
      this.setState({
        showFilterPanel: !this.state.showFilterPanel
      });
  },

  render() {
    var { showRighPage } = this.state;

    var mainClasses = classNames({
        "Home-main" : true,
        "is-hide" : showRighPage
    })
   
    var rightPageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showRighPage
    })
    return (
      <div className="Home">

        <div className={mainClasses}>
            
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

// <div className="Home-appBar">
//               <AppBar filterPanelHandler={this._toggleFilterPanel}/>
//             </div>
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
