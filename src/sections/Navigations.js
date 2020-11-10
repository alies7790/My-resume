import React, { Component } from "react";

import {connect} from "react-redux"
import LinkToSection from "../components/LinkToSection"
import "./Navigations.css";
import {change} from "../redux/action"
class Nagvigations extends Component {
  handleChangeTheme = () => {this.props.dispatch(change());}
  render() {
    
    return (
      
      <div className="nav">
        <div className="left">
          <p className="theme" onClick={this.handleChangeTheme}>theme</p>
        </div>
            
        <div className="right">
            <div className="rightDiv">
            <LinkToSection add="AboutSection"></LinkToSection>
            </div>
            <div className="rightDiv">
            <LinkToSection add="SkillSection"></LinkToSection>
            </div>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = state =>{
  const level_theme=state.level_theme;
  return {level_theme}
};

export default connect(mapDispatchToProps)(Nagvigations);
