import React, { useState } from "react"
import axios from "axios"
import MovieSearch from "../MovieSearch"
import { SearchBox } from "../../Styled-Components/Styled-Home"
import { MovieList } from "../../Styled-Components/MovieList"
import { Redirect } from "react-router-dom"

const Home = () => {
  const apikey = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([])
  const [ redirect, setRedirect ] = useState('')

  const viewDetail = movieId => {
    setRedirect(movieId)
  }

  const searchMovies = searchValue => {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${apikey}`)
      .then(res => {
        const { Search } = res.data
        setMovies(Search)
        console.log(Search)
    }).catch(error => error)
  }

  return (
    <SearchBox>
      <h2>Search your movie!</h2>
      <MovieSearch search={searchMovies} />
      {!!redirect && <Redirect to={`/movies/${redirect}`} />}
      <MovieList>
        {
          movies.map((movie, index) => (
            <li key={index} >
              {movie.Title}
              <button onClick={() => viewDetail(movie.imdbID)}>More</button>
            </li>
          ))
        }
      </MovieList>
    </SearchBox>
  )
}

export default Home