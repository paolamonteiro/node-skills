import React, { useState, useEffect } from "react"
import MovieDetails from "../MovieDetails"
import axios from "axios"
import { useParams } from 'react-router-dom'

const Movies = () => {
  const [movie, setMovie] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const apikey = process.env.REACT_APP_API_KEY
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
      .then(res => {
        const { data } = res
        const newMovie = `${data.Title} - ${data.Year} - ${data.Plot} - ${data.Actors}`
        setMovie(newMovie)
    }).catch(error => error)
  }, [id])

  return (
    <MovieDetails movie={movie} />
	)
}

export default Movies