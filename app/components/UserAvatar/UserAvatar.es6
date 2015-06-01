import React from "react";
import { Link } from "react-router";

import "./UserAvatar.css"

export default class UserAvatar extends React.Component {
  render () {
    
    
      var imgURL = require("./images/user.jpg");
      return (
          <div className="UserAvatar">
            <img className="UserAvatar-img" 
                 src={imgURL} />
          </div>
      )
    
  }
}


