import React from "react"
import './login.css'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=187159b003a64400a1bda157df63d263&response_type=code&redirect_uri=http://localhost:5173/&scope=user-top-read%20user-read-recently-played"
export default function Login() {
    return (
        <div className="container-login">
            <div className="card-login">
                <h1>Check your most heard artists and songs</h1>
                <a className="btn" href={AUTH_URL}>
                    Login With Spotify
                </a>
            </div>
        </div>)
}