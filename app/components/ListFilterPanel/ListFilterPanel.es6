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
      showPositionPanel: false
    };
  },

  _togglePartyPanel(){
      this.setState({
        showPartyPanel: !this.state.showPartyPanel
      })
  },

  render() {
    var {currentTab, showFilterPanel, tabHandler, filterHandler, partyHandler, positionHandler, currentParty, currentPosition} = this.props;
    var {showPartyPanel, showPositionPanel} = this.state;
   

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

     var positionOptionClasses = classNames({
        "ListFilterPanel-options" : true,
        "is-show" : showPartyPanel
    });
    var positions = ["所有立場","支持","反對","不明"];
    var positionItems = positions.map((value,i)=>{
        return (
          <li className="ListFilterPanel-option"
              key={i}>{value}</li>
        )
    });


    return (
        <div className="ListFilterPanel">
          <div className="ListFilterPanel-tabs">{tabsItem}</div>
          <div className={filterToggleClasses}
               onClick={filterHandler}><Icon icon={"cog"}/>
               <span className="ListFilterPanel-text">進階搜尋</span></div>
          <div className={filterPanelClasses}>
            
              <Select options={parties}
                      setValueHandler={partyHandler}
                      currentValue={currentParty} />
              <Select options={positions}
                      setValueHandler={positionHandler}
                      currentValue={currentPosition} />
          </div>
        </div>
    );

   

  }
});

  // <div className="ListFilterPanel-selectItem">
  //                 <div className="ListFilterPanel-select"
  //                      onClick={this._togglePartyPanel}>所有政黨 
  //                     <span className="ListFilterPanel-selectIcon"><Icon icon={"angle-down"}/></span>
  //                 </div>
  //                 <ul className={partyOptionClasses}>{partyItems}</ul>
                 
  //             </div>




