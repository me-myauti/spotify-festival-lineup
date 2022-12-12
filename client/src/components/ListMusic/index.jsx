
import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useMusicRequests from '../../hooks/useMusicRequests'
import 'aos/dist/aos.css';


const spotifyApi = new SpotifyWebApi({
    clientId: '187159b003a64400a1bda157df63d263',
})

export default function ListMusic({ accessToken, option }) {
    const token = accessToken
    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])
    const topMusics = useMusicRequests(token, option)
    console.log(topMusics)

    return (
        <div className='festival'>
            {topMusics.map(artist => (
                <div className='artists' data-aos="fade-right" key={artist.id}>
                    <div className='artists-info'>
                        <div className="image" >
                            <img src={artist.album.images[0].url} alt="" />
                        </div>

                        <div className="text-list-fundo">
                            <p className="title-list" >{artist.name}</p>
                            <div className="genre-list">
                                <div>
                                    <p className="subtitle-list">{artist.artists[0].name}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="checkArtist" href={artist.external_urls.spotify}>{'>'}</a>
                </div>
            ))
            }


        </div >
    )
}