import { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"


const spotifyApi = new SpotifyWebApi({
    clientId: '187159b003a64400a1bda157df63d263',
})


export default function useRequests(accessToken, option) {
    const [topArtists, setTopArtists] = useState([])
    const token = accessToken
    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])

    useEffect(() => {
        if (!token) return
            axios.post(`http://localhost:3001/artists${option}`, {
                accessToken
            }).then(res => {
                setTopArtists(res.data.topArtists)
            }).catch(err => {
                console.log(err)
            })
    }, [option, token])

    return topArtists
}