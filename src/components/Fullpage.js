import React,{ Children, Component } from 'react'
import {connect} from 'react-redux'
import './Fullpage.css'
import Snowfall from 'react-snowfall'

class Fullpage extends Component{
    render(){
      
        const {children}=this.props
        return(

            <div className={`fullpage ${this.props.className || ''} ${this.props.level_theme || ''}`}>
                
                {children}
            </div> 
        );
    }
}

const mapDispatchToProps = state =>{
    const level_theme=state.level_theme;
    return {level_theme}
  };

export default connect(mapDispatchToProps)(Fullpage);