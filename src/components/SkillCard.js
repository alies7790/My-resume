import React,{  Component } from 'react'
import './SkillCard.css'

class SkillCard extends Component{
    render(){
        const {skill}=this.props
        return(
            <div className="card">
                <div className="image-wrappr">
                  <img
                    src={require(`../../public/${skill.content.image}`)}
                    width="50"
                    height="50"
                  />
                </div>
                <div className="skill-title-wrapper">
                  <h4>{skill.content.title}</h4>
                </div>
              </div> 
        );
    }
}

export default SkillCard;