global.fetch = require("node-fetch");
const SpotifyWrapper = require("spotify-wrapper").default
const spotify = require("../src/methods");
require('dotenv').config()

spotifyWrapper = new SpotifyWrapper({
    token: process.env.TOKEN
})

describe("Get Album name test", () => {
    test("Should return album name, researching by the band name", async () => {
        const album = await spotify.getAlbum("Five Finger Death Punch", spotifyWrapper)
        expect(album).toBe("The Wrong Side Of Heaven And The Righteous Side Of Hell, Volume 1")
    })
    test("should return album name, researching by the album name", async () => {
        const album = await spotify.getAlbum("Got Your Six", spotifyWrapper)
        expect(album).toBe("Got Your Six")
    })
    test("should return an invalid argument error",  () => {
        return expect(spotify.getAlbum("", spotifyWrapper))
            .rejects.toMatch("Invalid album")
    })
    test("should return an invalid argument error",  () => {
        return expect(spotify.getAlbum(undefined, spotifyWrapper))
            .rejects.toMatch("Invalid album")
    })
    test("should return album not found", () => {
        return expect(spotify.getAlbum("suhduashasudha", spotifyWrapper))
            .rejects.toMatch("Album not found")
    })
    test("should return album not found", () => {
        return expect(spotify.getAlbum(".", spotifyWrapper))
            .rejects.toMatch("Album not found")
    })
})