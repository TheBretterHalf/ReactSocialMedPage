import React from "react";

//&& will only run the second line if the first line does not exist
function Display(props){
    return(
        <div>
            <p>{props.artist}</p>
            <p>{props.song}</p>
            <div>{props.lyrics && props.lyrics
            .split("\n\n")
            .map((paragraph, index)=>{return <p key={index}> {paragraph} </p>})}</div>
        </div>
        )
}

export default Display