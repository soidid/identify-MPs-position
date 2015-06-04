import React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon.es6";
import './Lexicon.css';

export default React.createClass({
  
  displayName: "Lexicon",
  
  getInitialState() {
    return {
      
    };
  },

  _onClick(value){
    console.log("click readmore, value:"+value);
    this.props.setIssueHandler(value);
    
  },

  render() {
    var {data} = this.props;

    return (
      <div className="Lexicon"
           onClick={this._onClick.bind(null, data.title)}>
          <div className="Lexicon-title">{data.title}</div>
          <div className="Lexicon-summary">{data.why_you_should_care}</div>
          <div className="Lexicon-readmore">了解更多</div>
      </div>);
  }
});


