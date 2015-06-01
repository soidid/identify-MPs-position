import React from "react";
import { Link } from "react-router";
import classNames from "classnames";
import moment from "moment";

import Icon from "../Icon/Icon.es6";
import Record from "../Record/Record.es6";

import Data from "./RecordList";
import "./RecordList.css";

function opinionToEng(value){
    switch(value){
              case '贊成':
                  return "for";
              case '反對':
                  return "against";
              case '不知所云':
                  return "unclear";
              case '不明確':
                  return "none";
    }
    return "";

          
}
export default class RecordList extends React.Component {
  constructor(props) { super(props)
      this.state = { 
        currentTab: 'vote'
      }
  }

  _onSetTab(i, event){
    this.setState({
        currentTab: i
    });

  }

  render() {
   
    var { opinion, subject } = this.props;
    var { currentTab } = this.state;
   
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
              <Record data={item} subject={subject} index={key}/>
            </div>
        )
    })

    var tabs = [{title:"最多人標注",id:"vote"},{title:"最近更新",id:"timeline"},{title:"尚未標注",id:"none"}];
    
    var tabsItem = tabs.map((item,key)=>{
        var tabClasses = classNames({
            "RecordList-tab": true,
            "is-active": currentTab === item.id,
            "is-last": key === tabs.length-1
        });
        return (
          <div className={tabClasses}
               onClick={this._onSetTab.bind(this, item.id)}
               key={key}>{item.title}</div>
        )
    });

  
    
    return (
        <div className="RecordList">
          
          <div className="RecordList-content">
              <div className="RecordList-tabs">{tabsItem}</div>
              {content}
          </div>

          <div className="RecordList-btn">載入更多</div>

          <div className="RecordList-title" id="how">我們如何調查</div>
          <div className="RecordList-description">我們集結了網友與各公民團體一起協作，判斷立委參選人對個議題的立場，分為三大類：贊成、反對、不明。若對於判斷有疑惑，歡迎來當公民偵探一起協作與檢驗候選人立場！</div>
              
          
        </div>
    );

   

  }
}




