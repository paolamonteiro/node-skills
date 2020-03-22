import React from "react"
import { MovieList } from "../../Styled-Components/MovieList"

const MovieDetails = ({movie}) => (
	<MovieList>
		{
			<li>{movie}</li>
		}
	</MovieList>
)

export default MovieDetails