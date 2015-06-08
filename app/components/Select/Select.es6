import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon.es6";
import './Select.css';

export default React.createClass({
  
  displayName: "Select",
  
  getInitialState() {
    return {
      showOptions: false
    };
  },

  _toggleOptionPanel(){
    this.setState({
      showOptions: !this.state.showOptions
    })
  },

  _setValue(value, event){
   
    this.setState({
      showOptions: !this.state.showOptions
    })
    this.props.setValueHandler.call(null, value);
  },

  render() {
    var {options, currentValue, setValueHandler} = this.props;
    var {showOptions} = this.state

    var panelClasses = classNames({
        "Select-options" : true,
        "is-show" : showOptions
    });

    
    var optionItems = options.map((value,i)=>{
        return (
          <li className="Select-option"
              key={i}
              onClick={this._setValue.bind(null,value)}>{value}</li>
        )
    });

    return (
      <div className="Select">
          <div className="Select-select"
               onClick={this._toggleOptionPanel}>
              <span className="Select-currentValue">{currentValue}</span>
              <span className="Select-selectIcon"><Icon icon={"angle-down"}/></span>
          </div>
          <ul className={panelClasses}>{optionItems}</ul>
      </div>);
  }
});


