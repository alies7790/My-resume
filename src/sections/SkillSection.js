import React, {  Component } from "react";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard"
import data from "../data.json";
import "./SkillSection.css"

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3>{data.section[1].title}</h3>
        <div className="card-wrapper"> 
          {data.section[1].items.map((eachSkill) => {
            return (
              <SkillCard skill={eachSkill}/>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default SkillSection;