import React from "react"
import  './login.css'
const AUTH_URL ="https://accounts.spotify.com/authorize?client_id=709bc4074c7c424d8e98410ec4ede1ed&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read%20user-read-recently-played"


export default function Login(){
    return (
        <div className="container">
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}