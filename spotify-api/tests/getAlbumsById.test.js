global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get albums by ID test", () => {
    test("should return album names", async () => {
        const albumsById = await spotify.getAlbumsById(["0sNOF9WDwhWunNAHPD3Baj", "41MnTivkwTO3UUJ8DrqEJJ"], spotifyWrapper)
        expect(albumsById).toBe("She's So Unusual and The Best Of Keane (Deluxe Edition)")
    })
    test("should return an invalid argument error",  () => {
        return expect(spotify.getAlbumsById(undefined, spotifyWrapper))
            .rejects.toMatch("Invalid album")
    })
    test("should return album not found", () => {
        return expect(spotify.getAlbumsById([".", "kkk"], spotifyWrapper))
            .rejects.toMatch("Albums not found")
    })
})