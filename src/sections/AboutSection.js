import React, {  Component } from "react";
import { Element,Link } from "react-scroll";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css"
import DownIcon from "../components/DownIcon"

class AboutSection extends Component {
  render() {
    return (
      <div>
          <div>
        <Fullpage className="second">
        <h3>{data.section[0].title}</h3>
        <div className="paragraphs">
          {data.section[0].items.map((p) => {
            return <p>{p.content}</p>;
          })}
        </div>
        
      </Fullpage>
      </div>
      <div>
      <Link
          activeClass="active"
          to="SkillSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      <Element name="SkillSection" className="element" />
      </div>
      </div>
      
      
      
    );
  }
}

export default AboutSection;
