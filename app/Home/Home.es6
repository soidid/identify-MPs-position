import React from "react";
import classNames from "classnames";
import AppBar from "../components/AppBar/AppBar.es6";
import RecordList from "../components/RecordList/RecordList.es6";
import SingleRecord from "../components/SingleRecord/SingleRecord.es6";

import IssueListPage from "../components/IssueListPage/IssueListPage.es6";
import IssuePage from "../components/IssuePage/IssuePage.es6";
import NGOPage from "../components/NGOPage/NGOPage.es6";

import UserPage from "../components/UserPage/UserPage.es6";
import HistoryPage from "../components/HistoryPage/HistoryPage.es6";

import "./Home.css";
export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      showSingleRecord: false,
      showIssueListPage: false,
      showIssuePage: false,
      showNGOPage: false,
      showUserPage: false,
      showHistoryPage: false,
      currentScrollHeight: 0,
      currentIssue: "所有議題",
      currentRecord: null
    };
  },

  _setCurrentIssue(value) {
      console.log("set current issue to:"+value);
      if(value !== this.state.currentIssue){
          window.scrollTo(500, 0);
          console.log(pageYOffset);
          this.setState({
            currentIssue: value,
            showIssueOptions: false
          });
      }
  },

  _setCurrentRecord(value) {
      if(this.state.currentRecord !== value){
          this.setState({
            currentRecord: value
          });
          this._toggleSingleRecord();
      } 
  },

  _toggleSingleRecord(){
    this.setState({
      showSingleRecord: !this.state.showSingleRecord
    })
    
    //表示要從 show single record page 退出
    if(this.state.showSingleRecord===true){
      this.setState({
         currentRecord: null
      })
    }

    //Saving current scrolling position
    if(this.state.currentScrollHeight===0){
        console.log("Saving scrolling: "+ pageYOffset);
        this.setState({
          currentScrollHeight: pageYOffset
        })
    }
    window.scrollTo(0, 0);
  },

  _toggleIssueListPage(){
    console.log("toogle issue list");

    this.setState({
      showIssueListPage: !this.state.showIssueListPage
    })

    //Saving current scrolling position
    if(this.state.currentScrollHeight===0){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        
    }
    window.scrollTo(0, 0);
  },


  _toggleIssuePage(){
    this.setState({
      showIssuePage: !this.state.showIssuePage
    })

    //Saving current scrolling position
    if(this.state.currentScrollHeight===0){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        
    }
    window.scrollTo(0, 0);
  },

  _toggleNGOPage(){
    this.setState({
      showNGOPage: !this.state.showNGOPage
    })

    //Saving current scrolling position
    if(this.state.currentScrollHeight===0){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        
    }
    window.scrollTo(0, 0);
  },

  _toggleUserPage(){
    this.setState({
      showUserPage: !this.state.showUserPage
    })

    //Saving current scrolling position
    if(this.state.currentScrollHeight===0){
        this.setState({
          currentScrollHeight: pageYOffset
        })
        
    }
    window.scrollTo(0, 0);
  },

  _toggleHistoryPage(){
    this.setState({
      showHistoryPage: !this.state.showHistoryPage
    })

  },



  componentDidUpdate(){
    //如果是從 single record page 或 issue page 退出回到主頁，要 scroll 到原本離開的位置

    var {currentScrollHeight, 
         showSingleRecord, showIssueListPage, showIssuePage, showNGOPage, showUserPage} = this.state;

    console.log("component did upate, scrolling height:"+currentScrollHeight);

    if((currentScrollHeight!==0 && showSingleRecord === false && showIssuePage === false && showIssueListPage === false && showNGOPage === false && showUserPage === false)){ 
        console.log("reload scroll position");
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
  componentDidMount(){
    // document.ontouchmove = function(event) {
    //     event.preventDefault();
    // };
    // document.ontouchmove = function(event) {
    //     return false;
    // };
    // addEventListener("scroll", function(event) {
    //   pageYOffset = 0;
    //   console.log(event)
    //   console.log(pageYOffset);
    //   event.preventDefault();
    //   return false;
        
    // });

  },

  render() {
    var { currentIssue, showSingleRecord, showIssueListPage, showIssuePage, showNGOPage, currentRecord, showUserPage, currentScrollHeight, showHistoryPage } = this.state;

    var shouldHide = showSingleRecord || showIssuePage || showIssueListPage || showNGOPage || showUserPage || showHistoryPage;
    var mainClasses = classNames({
        "Home-main" : true,
        "is-hide" : shouldHide
    })
    var mainStyle = (shouldHide) ? {
        "transform" : `translate3d(0,${-currentScrollHeight}px,0)`
    }: {};
   
    var singleRecordClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showSingleRecord
    })
    var issueListPageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showIssueListPage
    })
    var issuePageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showIssuePage
    })
    var NGOPageClasses = classNames({
        "Home-rightPage" : true,
        "is-show" : showNGOPage
    })

    var UserPageClasses = classNames({
        "Home-leftPage" : true,
        "is-show" : showUserPage
    })
    var blackLayerClasses = classNames({
        "Home-blackLayer" : true,
        "is-show" : showUserPage
    })
    var HistoryPageClasses = classNames({
        "Home-bottomPage" : true,
        "is-show" : showHistoryPage
    })
    return (
      <div className="Home">

        
        <div className="Home-appBar">
            <AppBar filterPanelHandler={this._toggleFilterPanel}
                    setIssueHandler={this._setCurrentIssue}
                    showIssueListPageHandler={this._toggleIssueListPage}
                    currentIssue={currentIssue}
                    showUserPageHandler={this._toggleUserPage}/>
        </div>

        <div className={mainClasses} style={mainStyle}>

            <div className="Home-content">
              <RecordList showSingleRecordHandler={this._toggleSingleRecord}
                          showIssuePageHandler={this._toggleIssuePage}
                          showNGOPageHandler={this._toggleNGOPage}
                          currentIssue={currentIssue}
                          setCurrentRecordHandler={this._setCurrentRecord}
                          setIssueHandler={this._setCurrentIssue}/>
            </div>
        </div>

        <div className={singleRecordClasses}>
            <SingleRecord showSingleRecordHandler={this._toggleSingleRecord}
                          showNGOPageHandler={this._toggleNGOPage}
                          currentRecord={currentRecord}
                          setCurrentRecordHandler={this._setCurrentRecord} />
        </div>
        
        <div className={issueListPageClasses}>
            <IssueListPage showIssueListPageHandler={this._toggleIssueListPage}
                           showIssuePageHandler={this._toggleIssuePage}
                           showNGOPageHandler={this._toggleNGOPage}
                           setIssueHandler={this._setCurrentIssue}
                           currentIssue={currentIssue} />
        </div>
        <div className={issuePageClasses}>
            <IssuePage showIssuePageHandler={this._toggleIssuePage}
                       showNGOPageHandler={this._toggleNGOPage}
                       currentIssue={currentIssue}
                       setIssueHandler={this._setCurrentIssue} />
        </div>

        <div className={NGOPageClasses}>
            <NGOPage showNGOPageHandler={this._toggleNGOPage} />
        </div>
        
        <div className={blackLayerClasses}
             onClick={this._toggleUserPage}></div>
        
        <div className={UserPageClasses}>
            <UserPage showUserPageHandler={this._toggleUserPage}
                      showHistoryPageHandler={this._toggleHistoryPage}/>
        </div>

        <div className={HistoryPageClasses}>
            <HistoryPage showHistoryPageHandler={this._toggleHistoryPage}
                         showUserPageHandler={this._toggleUserPage}
                         setCurrentRecordHandler={this._setCurrentRecord}/>
        </div>



      </div>
    );
  }
});


