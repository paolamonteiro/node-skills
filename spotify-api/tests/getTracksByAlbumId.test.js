global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get tracks by album ID test", () => {
    test("should return track name", async () => {
        const track = await spotify.getTrackByAlbumId("0sNOF9WDwhWunNAHPD3Baj", spotifyWrapper)
        expect(track).toBe("Money Changes Everything")
    })
    test("should return an invalid argument error",  () => {
        return expect(spotify.getTrackByAlbumId(undefined, spotifyWrapper))
            .rejects.toMatch("Invalid album ID")
    })
    test("should return album not found", () => {
        return expect(spotify.getTrackByAlbumId("222", spotifyWrapper))
            .rejects.toMatch("Track not found")
    })
})