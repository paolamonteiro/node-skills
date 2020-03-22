import React from "react"
import { Menu, Header, Logo } from "../../Styled-Components/Styled-Navbar"
import { Link } from "react-router-dom"

const Navbar = () => (
  <Header>
    <Logo>LOGO</Logo>
    <Menu>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/movies">
        <li>Movies</li>
      </Link>
    </Menu>
  </Header>
)

export default Navbar