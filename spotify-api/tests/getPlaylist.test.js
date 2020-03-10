global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get playlist test", () => {
    test("should return playlist name", async () => {
        const playlist = await spotify.getPlaylist("Rock", spotifyWrapper)
        expect(playlist).toBe("Rock Classics")
    })
    test("should return an invalid playlist name error", () => {
        return expect(spotify.getPlaylist("", spotifyWrapper)).rejects.toMatch("Invalid playlist name")
    })
    test("should return an invalid playlist name error", () => {
        return expect(spotify.getPlaylist(undefined, spotifyWrapper)).rejects.toMatch("Invalid playlist name")
    })
    test("should return an playlist not found error", () => {
        return expect(spotify.getPlaylist("...", spotifyWrapper)).rejects.toMatch("Playlist not found")
    })
})