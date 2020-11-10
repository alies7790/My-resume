import React,{Component} from "react"
import { Link } from "react-scroll";

class LinkToSection extends Component{

    render(){
        const {add}=this.props
        return(
            <Link
              activeClass="active"
              to={add}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <label className="p">{add}</label>
            </Link>
        )
    }
}

export default LinkToSection