global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get album by ID test", () => {
    test("should return album name", async () => {
        const albumById = await spotify.getAlbumById("0sNOF9WDwhWunNAHPD3Baj", spotifyWrapper)
        expect(albumById).toBe("She's So Unusual")
    })
    test("should return an invalid argument error",  () => {
        return expect(spotify.getAlbumById(undefined, spotifyWrapper))
            .rejects.toMatch("Invalid album")
    })
    test("should return album not found", () => {
        return expect(spotify.getAlbumById(".", spotifyWrapper))
            .rejects.toMatch("Album not found")
    })
})