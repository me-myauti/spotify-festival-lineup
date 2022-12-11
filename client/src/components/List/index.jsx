import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useRequests from "../../hooks/useRequests"


const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.CLIENT_ID,
})

export default function List({ accessToken, option, reqType }) {
    const token = accessToken
    useEffect(() => {
            if (!token) return
            spotifyApi.setAccessToken(token)
    }, [token])
    const topArtists = useRequests(token, option, reqType)

    return (
        <div className='festival'>
            {topArtists.map(artist => (
                <div className='artists' key={artist.id}>
                    <p>{artist.name}</p>
                </div>
            ))}
        </div>
    )
}