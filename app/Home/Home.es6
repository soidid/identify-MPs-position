import React from "react";
import classNames from "classnames";
import AppBar from "../components/AppBar/AppBar.es6";
import RecordList from "../components/RecordList/RecordList.es6";
import SingleRecord from "../components/SingleRecord/SingleRecord.es6";
import IssuePage from "../components/IssuePage/IssuePage.es6";
import NGOPage from "../components/NGOPage/NGOPage.es6";

import "./Home.css";
export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      showSingleRecord: false,
      showIssuePage: false,
      showNGOPage: false,
      currentScrollHeight: 0,
      currentIssue: "所有議題"
    };
  },

  _setCurrentIssue(value) {
      if(value !== this.state.currentIssue){
          window.scrollTo(500, 0);
          console.log(pageYOffset);
          this.setState({
            currentIssue: value,
            showIssueOptions: false
          });
      }
  },

  _toggleSingleRecord(){
    this.setState({
      showSingleRecord: !this.state.showSingleRecord
    })

    //Saving current scrolling position
    if(!this.state.showSingleRecord){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        window.scrollTo(0, 0);
    }
  },

  _toggleIssuePage(){
    this.setState({
      showIssuePage: !this.state.showIssuePage
    })

    //Saving current scrolling position
    if(!this.state.showIssuePage){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        window.scrollTo(0, 0);
    }
  },

  _toggleNGOPage(){
    this.setState({
      showNGOPage: !this.state.showNGOPage
    })

    //Saving current scrolling position
    if(!this.state.showNGOPage){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        window.scrollTo(0, 0);
    }
  },


  componentDidUpdate(){
    //如果是從 single record page 或 issue page 退出回到主頁，要 scroll 到原本離開的位置
    var {currentScrollHeight, showSingleRecorde, showIssuePage, showNGOPage} = this.state;
    if((currentScrollHeight!==0 && showSingleRecord === false)||
       (currentScrollHeight!==0 && showIssuePage === false) ||
       (currentScrollHeight!==0 && showNGOPage === false)){ 
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
    var { currentIssue, showSingleRecord, showIssuePage, showNGOPage } = this.state;

    var mainClasses = classNames({
        "Home-main" : true,
        "is-hide" : showSingleRecord || showIssuePage
    })
   
    var singleRecordClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showSingleRecord
    })
    var issuePageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showIssuePage
    })
     var NGOPageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showNGOPage
    })
    return (
      <div className="Home">

        <div className={mainClasses}>
            
            <div className="Home-appBar">
              <AppBar filterPanelHandler={this._toggleFilterPanel}
                      setIssueHandler={this._setCurrentIssue}
                      currentIssue={currentIssue}/>
            </div>
            <div className="Home-content">
              <RecordList showSingleRecordHandler={this._toggleSingleRecord}
                          showIssuePageHandler={this._toggleIssuePage}
                          showNGOPageHandler={this._toggleNGOPage}
                          currentIssue={currentIssue}/>
            </div>
        </div>

        <div className={singleRecordClasses}>
            <SingleRecord showSingleRecordHandler={this._toggleSingleRecord}
                          showNGOPageHandler={this._toggleNGOPage} />
        </div>

        <div className={issuePageClasses}>
            <IssuePage showIssuePageHandler={this._toggleIssuePage}
                       showNGOPageHandler={this._toggleNGOPage} />
        </div>

         <div className={NGOPageClasses}>
            <NGOPage showNGOPageHandler={this._toggleNGOPage} />
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
