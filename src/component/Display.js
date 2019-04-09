import React from "react";

function Display(props){
    return(
        <div>
            <p>{props.artist}</p>
            <p>{props.song}</p>
            <p>{props.lyrics}</p>
        </div>
        )
}