import React, {Component} from "react"
import axios from 'axios';
class Input extends Component{
        state = {
        artistname: null,
        songname: null,
        lyrics: null
    }
    setArtist = name =>{
        this.setState({
            artistname: this.state.artistname
        })
    }
    setsongname = name =>{
        this.setState({
            songname: this.state.songname
        })
    }
    handleClick=()=>{
        axios("https://api.lyrics.ovh/v1/"+ this.state.artistname + "/" + this.state.songname)
        .then(response=>{
            console.log(response.data)
            this.setstate({
                lyrics: response.data.lyrics
            })
            this.props.setLyricsText(this.state.lyrics)
        })
            this.props.setArtistName(this.state.artistname);
            this.props.setSongName(this.state.songname);
            
    }
    

    render(){
        return(
            <div>
                <input onChange={this.setArtist} placeholder="Artist Name" />
                <input onChange={this.setsongname} placeholder="Song Name"/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
            )
    }
}

export default Input;