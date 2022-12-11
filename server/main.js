const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173/',
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    clientSecret: 'f36a194b2c2746b9b7bae004cf666849',
    refreshToken,
  })
  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post('/artistsShortTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })

  spotifyApi.getMyTopArtists({ time_range: 'short_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})


app.post('/artistsMediumTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })

  spotifyApi.getMyTopArtists({ time_range: 'medium_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

app.post('/artistsLongTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })


  spotifyApi.getMyTopArtists({ time_range: 'long_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})


app.post('/musicsShortTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })

  spotifyApi.getMyTopTracks({ time_range: 'short_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

app.post('/musicsMediumTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })

  spotifyApi.getMyTopTracks({ time_range: 'medium_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

app.post('/musicsLongTerm', (req, res) => {
  const accessToken = req.body.accessToken
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    accessToken
  })

  spotifyApi.getMyTopTracks({ time_range: 'long_term', limit: 30 })
    .then(function (data) {
      let topArtists = data.body.items;
      return res.json({ topArtists })
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    clientId: '7352e308c7a8445fb047ceaccdf09ce7',
    redirectUri: 'http://localhost:5173/',
    clientSecret: 'f36a194b2c2746b9b7bae004cf666849',
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.listen(3001)