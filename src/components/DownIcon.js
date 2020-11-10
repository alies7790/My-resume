import React, {  Component } from "react";

const  DownIcon = (props)=>{
    return(
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "-45px",
            transform: "translateY(-45px)",
          }}
        >
          <div >
            <img src={require(`../../public/${props.icon}`)} style={{ maxWidth: "40px" }}></img>
          </div>
        </div>
    )
}

export default DownIcon