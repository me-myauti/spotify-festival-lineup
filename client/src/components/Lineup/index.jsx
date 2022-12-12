import './line.css'
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import List from '../List';
import ListMusic from '../ListMusic';

const spotifyApi = new SpotifyWebApi({
    clientId: '187159b003a64400a1bda157df63d263',
})

export default function Lineup({ code }) {
    const accessToken = useAuth(code)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])




    const [range, setRange] = useState('ShortTerm')
    const [option, setOption] = useState()

    useEffect(() => {
        if (range == 'ShortTerm') {
            document.getElementById('short').classList.add('selected')
            document.getElementById('medium').classList.remove('selected')
            document.getElementById('long').classList.remove('selected')
        } else if (range == 'MediumTerm') {
            document.getElementById('short').classList.remove('selected')
            document.getElementById('medium').classList.add('selected')
            document.getElementById('long').classList.remove('selected')
        } else {
            document.getElementById('short').classList.remove('selected')
            document.getElementById('medium').classList.remove('selected')
            document.getElementById('long').classList.add('selected')
        }

    }, [range])

    if (option == 'musics') {
        return (
            <div>
                <div className="container-lineup">
                    <h1>This is your festival</h1>

                </div>

                <div className="list-lineup">
                    <div className="buttons-lineup">
                        <div>
                            <button id='short' onClick={() => setRange('ShortTerm')}>Short</button>
                            <button id='medium' onClick={() => setRange('MediumTerm')}>Medium</button>
                            <button id='long' onClick={() => setRange('LongTerm')}>Long</button>
                        </div>
                        <div>
                            <button id='medium' onClick={() => setOption('artists')}>Artists</button>
                            <button id='short' onClick={() => setOption('musics')}>Musics</button>
                        </div>
                    </div>
                    <ListMusic accessToken={accessToken} option={range} code={code} />
                </div>


            </div>
        )
    } else if (option == 'artists') {
        return (
            <div>
                <div className="container-lineup">
                    <h1>This is your festival</h1>

                </div>

                <div className="list-lineup">
                    <div className="buttons-lineup">
                        <div>
                            <button id='short' onClick={() => setRange('ShortTerm')}>Short</button>
                            <button id='medium' onClick={() => setRange('MediumTerm')}>Medium</button>
                            <button id='long' onClick={() => setRange('LongTerm')}>Long</button>
                        </div>
                        <div>
                            <button onClick={() => setOption('artists')}>Artists</button>
                            <button onClick={() => setOption('musics')}>Musics</button>
                        </div>
                    </div>
                    <List accessToken={accessToken} option={range} code={code} />
                </div>


            </div>
        )
    } else {
        return (
            <div>
                <div className="container-lineup">
                    <h1>This is your festival</h1>

                </div>

                <div className="list-lineup">
                    <div className="buttons-lineup">
                        <div>
                            <button id='short' onClick={() => setRange('ShortTerm')}>Short</button>
                            <button id='medium' onClick={() => setRange('MediumTerm')}>Medium</button>
                            <button id='long' onClick={() => setRange('LongTerm')}>Long</button>
                        </div>
                        <div>
                            <button id='medium' onClick={() => setOption('artists')}>Artists</button>
                            <button id='short' onClick={() => setOption('musics')}>Musics</button>
                        </div>
                    </div>
                    <List accessToken={accessToken} option={range} code={code} />
                </div>


            </div>
        )
    }
}