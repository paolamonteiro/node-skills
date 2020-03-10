global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

spotify.getAlbum("Got Your Six", spotifyWrapper)
.then((data) => console.log(data))
.catch(error => console.error(error))

spotify.getArtist("Led Zeppelin", spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))

spotify.getTrack("Under and Over It", spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))

spotify.getPlaylist("Rock", spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))

spotify.getAlbumById("0sNOF9WDwhWunNAHPD3Baj", spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))

spotify.getAlbumsById(["0sNOF9WDwhWunNAHPD3Baj", "41MnTivkwTO3UUJ8DrqEJJ"], spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))

spotify.getTrackByAlbumId("0sNOF9WDwhWunNAHPD3Baj", spotifyWrapper)
.then((data) => console.log(data))
.catch((error) => console.error(error))