import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        artistname: null,
        songname: null,
        email: null
    }
    
    handleClick=()=>{
        console.log(this.state.firstname)
        axios.get("https://api.lyrics.ovh/v1/coldplay/yellow")
        .then(response=>{
            console.log(response.data)
        })
    }
    
    setArtisttName = e =>{
        //console.log(e.target.value)
        this.setState({
            artistname: e.target.value
        })
    }
    this.setSongName = e =>{
        this.setState({
            songname: e.target.value
        })
    }
    
    render(){
        return(
            <div>
            <p>My App</p>
            <input onChange={this.setArtistName} placeholder="Artist Name" />
            <input onChange={this.setSongName} placeholder="Song Name"/>
            <button onClick={this.handleClick}>Submit</button>
            </div>
            )
    }
}

export default Profile;