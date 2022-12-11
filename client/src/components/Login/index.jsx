import React from "react" 
import './login.css'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7352e308c7a8445fb047ceaccdf09ce7&response_type=code&redirect_uri=http://localhost:5173/&scope=user-top-read%20user-read-recently-played"
export default function Login() {
    return (
        <div className="container-login">
            <div className="card-login">
                <h1>Check your most heard artists </h1>
                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                    Login With Spotify
                </a>
            </div>
        </div>)
}