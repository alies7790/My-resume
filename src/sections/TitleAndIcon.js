import React, {  Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitleAndIcon.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
import Snowfall from 'react-snowfall'

class TitleAndIcon extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Fullpage className="first">
          <Snowfall
          
          ></Snowfall>
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="AboutSection"
          spy={true}
          smooth={true}
          offset={-1}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="AboutSection" className="element" />
      </div>
    );
  }
}

export default TitleAndIcon;
