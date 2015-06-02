import React from "react";
import { Link } from "react-router";
import classNames from 'classnames';

import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.es6";
import Icon from "../Icon/Icon.es6";
import UserAvatar from "../UserAvatar/UserAvatar.es6";

import "./Record.css";
export default class Record extends React.Component {
  constructor(props) { super(props)
      this.state = { 
          showTooltip: false
      }
  }

 
  _onToggleShowTooltip(){

      this.setState({ 
          showTooltip: !this.state.showTooltip
      });
      
  }


  render() {
   
    var {data, subject, index, showSingleRecordHandler} = this.props;
    var {showTooltip} = this.state;
   
    var opinionClasses = classNames({
      "Record-opinion": true,
      "is-for": data.opinion === '支持',
      "is-against": data.opinion === '反對',
      "is-unclear": data.opinion === '不明確'
    });
   
  
    
    var tooltip = (showTooltip) ? 
        <div className="Record-tooltip">
            <div className="Record-tooltipItem">複製連結</div>
            <div className="Record-tooltipItem">看立法院原始資料</div>
            <div className="Record-tooltipItem">檢舉</div>
        </div> : ""; 
  
    var userImg = require("./user.jpg");
   
    var actionItem = (
        <div>
            <div className="Record-currentTag">
            <div className="Record-tag">
                <span className="Record-numberText">167 人</span> 標注為<Icon icon={"circle-o"}/>支持勞工權益
            </div>
            <div className="Record-tag">
                <span className="Record-numberText">532 人</span> 標注為<Icon icon={"remove"}/>反對勞工權益
            </div>
            <div className="Record-tag">
                <span className="Record-numberText">12 人</span> 標注為<Icon icon={"question"}/>不明
            </div>
            </div>
            <div className="Record-tagArea">
                <img className="Record-userImg" src={userImg}/>
                <div className="Record-promptWrap">
                    <div className="Record-promptTag">為{data.name}標注勞工表態立場</div>
                    <div className="Record-tagLabel"><Icon icon={"circle-o"}/> 支持勞工權益</div>
                    <div className="Record-tagLabel"><Icon icon={"remove"}/> 反對勞工權益</div>
                    <div className="Record-tagLabel"><Icon icon={"question"}/>不明</div>
                </div>
            </div>
        </div>
    );

  
    return (
        <div className="Record">
            <div className="Record-topRight" onClick={this._onToggleShowTooltip.bind(this, null)}>
                <span className="Record-more"><Icon icon={"ellipsis-v"}/> 
                </span>
                {tooltip}
            </div>
           
            <div className="Record-title">
                <LegislatorAvatar data={data.name} name={true}/> 
                <div className="Record-meta">／{data.type}</div>
                <div className="Reocrd-date">{data.date}</div>
            </div>
            <div className="Record-quote"
                 onClick={showSingleRecordHandler}>
               {data.quote}
            </div>
             <div className="Record-editedBy">
                －由 <Link className="Record-link" to="app">勞工陣線</Link> 摘錄
            </div>
            {actionItem}
        </div>
    );


    
  }
}





