import './line.css'
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import List from '../List';

const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.CLIENT_ID,
})

export default function Lineup({ code }) {
    const accessToken = useAuth(code)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])




    const [range, setRange] = useState('ShortTerm')
    const [option, setOption] = useState('artists')

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

    useEffect(() => {
        if (option == 'artists') {
            document.getElementById('artists').classList.add('selected')
            document.getElementById('musics').classList.remove('selected')
        } else {
            document.getElementById('artists').classList.remove('selected')
            document.getElementById('musics').classList.add('selected')
        }
    }, [option])

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
                        <button id='artists' onClick={() => { setOption('artists') }}>Your most heard artists</button>
                        <button id='musics' onClick={() => { setOption('musics') }}>Your most heard musics</button>
                    </div>

                </div>
                <List accessToken={accessToken} option={range} reqType={option} code={code} />
            </div>


        </div>
    )
}