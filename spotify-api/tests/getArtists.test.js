global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get artist name test", () => {
    test("Should return artist name researching by the artist name", async () => {
        const artist = await spotify.getArtist("Led Zeppelin", spotifyWrapper)
        expect(artist).toBe("Led Zeppelin")
    })
    test("should return an invalid argument error", () => {
        return expect(spotify.getArtist("", spotifyWrapper)).rejects.toMatch("Invalid artist name")
    })
    test("should return an invalid argument error", () => {
        return expect(spotify.getArtist(undefined, spotifyWrapper)).rejects.toMatch("Invalid artist name")
    })
    test("should return an artist not found error", () => {
        return expect(spotify.getArtist("?", spotifyWrapper)).rejects.toMatch("Artist not found")
    })
})