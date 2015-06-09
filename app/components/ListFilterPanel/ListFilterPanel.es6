import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon.es6";
import Select from "../Select/Select.es6";

import "./ListFilterPanel.css";
export default React.createClass({
 
  displayName: "ListFilterPanel",
  
  getInitialState() {
    return {
      showPartyPanel: false,
      showIssueOptions: false
    };
  },

  _togglePartyPanel(){
      this.setState({
        showPartyPanel: !this.state.showPartyPanel
      })
  },

   _toggleIssueOptions(){
      this.setState({
        showIssueOptions: !this.state.showIssueOptions
      })
  },

  render() {
    var {currentTab, showFilterPanel, tabHandler, filterHandler, partyHandler, currentParty, currentIssue, setIssueHandler} = this.props;
    var {showPartyPanel, showIssueOptions} = this.state;
   

    ////////

    var tabs = [{title:"最多人標注",id:"vote"},{title:"最近更新",id:"timeline"},{title:"我尚未標注",id:"none"}];
    
    var tabsItem = tabs.map((item,key)=>{
       
        var tabClasses = classNames({
            "ListFilterPanel-tab": true,
            "is-active": currentTab === item.id,
            "is-last": key === tabs.length-1
        });
        return (
          <div className={tabClasses}
               onClick={tabHandler.bind(null, item.id)}
               key={key}>{item.title}</div>
        )
    });


    ///////

   
    var filterToggleClasses = classNames({
        "ListFilterPanel-toggleFilter": true,
        "is-active": showFilterPanel
    });
    var filterPanelClasses = classNames({
        "ListFilterPanel-filterPanel": true,
        "is-show": showFilterPanel
    });

    var filterText = (showFilterPanel)? "隱藏進階搜尋" : "進階搜尋";

    //////

    var partyOptionClasses = classNames({
        "ListFilterPanel-options" : true,
        "is-show" : showPartyPanel
    });

    var parties = ["所有政黨","中國國民黨","民主進步黨","台灣團結聯盟","親民黨"];
    var partyItems = parties.map((value,i)=>{
        return (
          <li className="ListFilterPanel-option"
              key={i}>{value}</li>
        )
    });

    ///

    var issueOptionClasses = classNames({
        "ListFilterPanel-issueOptions" : true,
        "is-show" : showIssueOptions
    });
    var toggleIcon = (showIssueOptions) ? "angle-up" : "angle-down";

    var issuesOptions = ["所有議題","勞工權益","婚姻平權","監督條例","罷免下修","食安","兩稅合一","核能"]
   


    return (
        <div className="ListFilterPanel">

          <div className="ListFilterPanel-filterPanels ">
              <Select options={issuesOptions}
                      setValueHandler={setIssueHandler}
                      currentValue={currentIssue} />
              
    
              <div className={filterPanelClasses}>
                  <Select options={parties}
                          setValueHandler={partyHandler}
                          currentValue={currentParty} />
              </div>

              <div className={filterToggleClasses}
                   onClick={filterHandler}>
                   <span className="ListFilterPanel-text">{filterText}</span>
              </div>
          </div>

          <div className="ListFilterPanel-tabs">{tabsItem}</div>
        </div>
    );

   

  }
});


         


