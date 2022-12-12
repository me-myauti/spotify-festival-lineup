import { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"


const spotifyApi = new SpotifyWebApi({
    clientId: '187159b003a64400a1bda157df63d263',
})


export default function useMusicRequests(accessToken, option) {
    const [topMusics, setTopMusics] = useState([])
    const token = accessToken
    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])

    useEffect(() => {
        if (!token) return
            console.log(option)
            axios.post(`http://localhost:3001/musics${option}`, {
                accessToken
            }).then(res => {
                setTopMusics(res.data.topArtists)
            }).catch(err => {
                console.log(err)
            })
    }, [option, token])

    return topMusics
}