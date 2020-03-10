global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get track test", () => {
    test("should return track name", async () => {
        const track = await spotify.getTrack("TKO", spotifyWrapper)
        expect(track).toBe("TKO")
    })
    test("should return track name", async () => {
        const track = await spotify.getTrack("Under and Over It", spotifyWrapper)
        expect(track).toBe("Under and Over It")
    })
    test("should return an invalid argument error", () => {
        return expect(spotify.getTrack("", spotifyWrapper)).rejects.toMatch("Invalid track name")
    })
    test("should return an track not found error", () => {
        return expect(spotify.getTrack("kasjdkas555", spotifyWrapper)).rejects.toMatch("Track not found")
    })
})