import React from "react";
import classNames from "classnames";

import PostBar from "../components/PostBar/PostBar.es6";
import Icon from "../components/Icon/Icon.es6";
import Record from "../components/Record/Record.es6";

import IssueListPage from "../components/IssueListPage/IssueListPage.es6";

import './PostPage.css';
import Data from "./PostPage";

export default React.createClass({
  
  displayName: "PostPage",
  
  getInitialState() {
    return {
      
    };
  },

  
  render() {
    var {showPostPageHandler, showNGOPageHandler} = this.props;
    var data =  Data[this.props.params.postID];
    
    var record = (data !== undefined)? <Record data={data} {...this.props}/>: "";


    return (
      <div className="PostPage">
          <PostBar />
          {record}

          
      </div>);
  }
});


