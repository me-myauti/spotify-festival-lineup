import './line.css'
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.CLIENT_ID,
})

export default function Lineup({ code }){
    const accessToken = useAuth(code)
    const [topArtists, setTopArtists] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(()=>{
        if(!accessToken) return
        console.log(accessToken)
        axios.post('http://localhost:3001/artistsMediumTerm', {
            accessToken
        }).then(res=>{
            console.log(res.data.topArtists)
            setTopArtists(res.data.topArtists)
        }).catch(err=>{
            console.log(err)
        })


    }, [accessToken])

    return(
        <div>
            <div className="container">
                <h1>This is your festival</h1>
                <div className='festival'>
                {topArtists.map(artist => (
                    <div className='artists' key={artist.id}>
                        <p>{artist.name}</p>
                    </div>
                ))}
                </div>
            
            </div>
        </div>
    )
}