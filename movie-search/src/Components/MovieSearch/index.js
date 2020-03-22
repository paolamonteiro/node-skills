import React, { useState } from "react"
import { FormBox } from "../../Styled-Components/Styled-Form"

const MovieSearch = ({search}) => {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    search(searchValue)
    setSearchValue("")
  }

  return (
    <FormBox>
      <form>
        <input
          value={searchValue}
          onChange={handleChange}
          type="text"
        />
        <button  
          onClick={handleSubmit}
          type="submit">Search!</button>
      </form>
    </FormBox>
  )
}

export default MovieSearch