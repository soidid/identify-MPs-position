import React from "react";
import { Link } from "react-router";

import "./LegislatorAvatar.css"

export default class LegislatorAvatar extends React.Component {
  render () {
    var {data, plain, party, name} = this.props;
    var imgURL;

    try {
      imgURL = require("./images/avatar/"+data+".png");
    }catch(e){
      imgURL = require("./images/default.jpg");
    }

    var name = (name) ? <div className="LegislatorAvatar-name">{data}</div> : "";
    
    var imgClass = "LegislatorAvatar-avatar";
    if(party){
        imgClass += " is-"+party;
    }
    var result = (
        <div className="LegislatorAvatar">
            <img className={imgClass}
                 src={imgURL} />
            {name}
        </div>);


    if(plain){
         var name = (name) ? <div className="LegislatorAvatar-namePlain">{data}</div> : "";
        result = (
        <div className="LegislatorAvatar">
            <img className="LegislatorAvatar-avatarPlain"
               src={imgURL} />
            {name}
        </div>);

    }
  
    return result;
  }
}


