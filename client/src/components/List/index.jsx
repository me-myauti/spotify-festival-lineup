
import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useRequests from "../../hooks/useRequests"
import './list.css'
import 'aos/dist/aos.css';


const spotifyApi = new SpotifyWebApi({
    clientId: '187159b003a64400a1bda157df63d263',
})

export default function List({ accessToken, option, reqType }) {
    const token = accessToken
    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])
    const topArtists = useRequests(token, option, reqType)
    console.log(topArtists)

    return (
        <div className='festival'  >
            {topArtists.map(artist => (
                <div className='artists' data-aos="fade-right" key={artist.id}>
                    <div className="artists-info">
                        <div className="image" >
                            <img src={artist.images[0].url} alt="" />
                        </div>

                        <div className="text-list-fundo">
                            <p className="title-list" >{artist.name}</p>
                            <div className="genre-list">
                                {
                                    artist.genres.slice(0, 2).map(genre => (
                                        <div>
                                            <p className="subtitle-list">{genre}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <a className="checkArtist" target='_blank' href={artist.external_urls.spotify}>{'>'}</a>
                </div>
            ))
            }


        </div >
    )
}