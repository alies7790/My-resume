import React,{Component} from "react"
import { Link } from "react-scroll";

class LinkToSection extends Component{

    render(){
        const {add}=this.props
        return(
            <Link
              activeClass="active"
              to="AboutSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <label className="p">about</label>
            </Link>
        )
    }
}

export default LinkToSection