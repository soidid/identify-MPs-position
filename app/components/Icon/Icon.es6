import React from "react";
import { Link } from "react-router";

import "./Icon.css";
export default class Icon extends React.Component {
	render() {
		var {icon} = this.props;
		var classes = "fa fa-"+icon;
		return (
			<div className="Icon">
			    <i className={classes}></i>
			</div>
		);
	}
}
