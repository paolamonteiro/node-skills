module.exports.getAlbum =  (album, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(album)) {
      return reject("Invalid album")
    }
    spotifyWrapper.search.albums(album)
    .then((data) => data.albums.total === 0
      ? reject("Album not found")
      : resolve(data.albums.items[0].name))
    .catch((error) => console.error(error))
  })
}

module.exports.getArtist = (artist, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(artist)) {
      return reject("Invalid artist name")
    }
    spotifyWrapper.search.artists(artist)
    .then(data => data.artists.total === 0
      ? reject("Artist not found")
      : resolve(data.artists.items[0].name))
    .catch((error) => console.error(error))
  })
}

module.exports.getTrack = (track, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(track)) {
      return reject("Invalid track name")
    }
    spotifyWrapper.search.tracks(track)
    .then((data) => data.tracks.total === 0
      ? reject("Track not found")
      : resolve(data.tracks.items[0].name))
    .catch((error) => console.error(error))
  })
}

module.exports.getPlaylist = (playlist, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(playlist)) {
      return reject("Invalid playlist name")
    }
    spotifyWrapper.search.playlists(playlist)
    .then((data) => data.playlists.total === 0
      ? reject("Playlist not found")
      : resolve(data.playlists.items[0].name))
    .catch((error) => console.error(error))
  })
}

module.exports.getAlbumById = (albumId, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(albumId)) {
      return reject("Invalid album ID")
    }
    spotifyWrapper.album.getAlbum(albumId)
    .then((data) => data.hasOwnProperty("error")
      ? reject("Album not found")
      : resolve(data.name))
    .catch((error) => console.error(error))
  })
}

module.exports.getAlbumsById = (albumIdArray, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(albumIdArray)) {
      return reject("Invalid album ID's")
    }
    spotifyWrapper.album.getAlbums(albumIdArray)
    .then((data) => data.hasOwnProperty("error")
      ? reject("Albums not found")
      : resolve(`${data.albums[0].name} and ${data.albums[1].name}`))
    .catch((error) => console.error(error))
  })
}

module.exports.getTrackByAlbumId = (albumId, spotifyWrapper) => {
  return new Promise((resolve, reject) => {
    if (validateParam(albumId)) {
      return reject("Invalid album ID")
    }
    spotifyWrapper.album.getTracks(albumId)
    .then((data) => data.hasOwnProperty("error")
      ? reject("Track not found")
      : resolve(data.items[0].name))
    .catch((error) => console.error(error))
  })
}

const validateParam = value => value === null || value === undefined || value === ""