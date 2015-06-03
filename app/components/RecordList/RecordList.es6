import React from "react";
import { Link } from "react-router";
import classNames from "classnames";
import moment from "moment";

import Icon from "../Icon/Icon.es6";
import Record from "../Record/Record.es6";
import ListFilterPanel from "../ListFilterPanel/ListFilterPanel.es6";

import Data from "./RecordList";
import "./RecordList.css";


export default React.createClass({
  displayName: 'RecordList',

  getInitialState(){
      return { 
        currentTab: 'vote',
        currentParty: '所有政黨',
        currentPosition: '所有立場',
        showFilterPanel: false
      }
  },

  _onSetTab(i, event){
    this.setState({
        currentTab: i
    });
  },

  _onToggleFilterPanel(){
    this.setState({
        showFilterPanel: !this.state.showFilterPanel
    });
  },

  _onSetParty(value){
    this.setState({
        currentParty: value
    });
  },
  
  _onSetPosition(value){
    this.setState({
        currentPosition: value
    });
  },

  render() {
   
    var { opinion, subject, showSingleRecordHandler, showIssuePageHandler, currentIssue } = this.props;
    var { currentTab, showFilterPanel, currentParty, currentPosition } = this.state;
   
    var data = Data.data;
    if(currentTab !== 'vote'){
        data.sort((a,b)=>{
          //console.log(moment(b.date));
          return moment(b.date) - moment(a.date);
        });
    }else{
        data.sort((a,b)=>{
          return b.trustVote - a.trustVote;
        });

    }
    var content = data.map((item,key)=>{
        return (
            <div key={key}>
              <Record data={item}
                      {...this.props}/>
            </div>
        )
    })

    
    return (
        <div className="RecordList">
          
          <div className="RecordList-content">
              
              <ListFilterPanel currentTab={currentTab} 
                               showFilterPanel={showFilterPanel}
                               tabHandler={this._onSetTab}
                               filterHandler={this._onToggleFilterPanel}
                               partyHandler={this._onSetParty}
                               positionHandler={this._onSetPosition}
                               currentParty={currentParty}
                               currentPosition={currentPosition}/>
              {content}
          </div>

          <div className="RecordList-btn">載入更多</div>

          <div className="RecordList-title" id="how">我們如何調查</div>
          <div className="RecordList-description">我們集結了網友與各公民團體一起協作，判斷立委參選人對個議題的立場，分為三大類：贊成、反對、不明。若對於判斷有疑惑，歡迎來當公民偵探一起協作與檢驗候選人立場！</div>
              
          
        </div>
    );

   

  }
});




