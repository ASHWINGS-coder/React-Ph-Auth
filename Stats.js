import React from 'react'

function Stats(props) {
    const stat = props.stat;
    return (
       <div style={{width:`${stat}px`, backgroundColor:"lightpink" , height:"40px" , margin:"0"}}>
           <h1>{props.stat}</h1>
       </div>
    )
}

export default Stats