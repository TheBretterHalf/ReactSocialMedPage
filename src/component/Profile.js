import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        artistname: null,
        songname: null,
        lyrics: null
    }
    setArtist = e =>{
        this.setState({
            artistname: this.state.artistname
        })
    }
    setsongname = e =>{
        this.setState({
            songname: this.state.songname
        })
    }
    handleClick=()=>{
        console.log(this.state.firstname)
        axios.get("https://api.lyrics.ovh/v1/"+ this.state.artistname + "/" + this.state.songname)
        .then(response=>{
            console.log(response.data)
             response.data.lyrics
        })
    }
    
    // this.setSongName = e =>{
    //     this.setState({
    //         songname:e.target.value
    //     })
    // }
    
    render(){
        return(
            <div>
            <p>My App</p>
            <input onChange={this.setArtist} placeholder="Artist Name" />
            <input onChange={this.setsongname} placeholder="Song Name"/>
            <button onClick={this.handleClick}>Submit</button>
            </div>
            )
    }
}

export default Profile;