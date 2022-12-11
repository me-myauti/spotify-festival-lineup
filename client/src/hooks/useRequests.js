import { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"


const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.CLIENT_ID,
})


export default function useRequests(accessToken, option, reqType) {
    const [topArtists, setTopArtists] = useState([])
    const token = accessToken
    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])

    useEffect(() => {
        if (!token) return
        if (reqType == 'artists') {
            axios.post(`http://localhost:3001/artists${option}`, {
                accessToken
            }).then(res => {
                setTopArtists(res.data.topArtists)
            }).catch(err => {
                console.log(err)
            })
        } else {
            axios.post(`http://localhost:3001/musics${option}`, {
                accessToken
            }).then(res => {
                setTopArtists(res.data.topArtists)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [option, token, reqType])

    return topArtists
}