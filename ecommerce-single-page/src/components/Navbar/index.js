import React from "react"
import { Menu, MenuList } from "../../styles/Menu"

const Navbar = () => {
  return (
    <div className="page-header">
      <h1 className="logo">LOGO</h1>
      <Menu>
        <MenuList>Home</MenuList>
        <MenuList>Products</MenuList>
        <MenuList>About</MenuList>
        <MenuList>Contact</MenuList>
        <MenuList>Help</MenuList>
      </Menu>
    </div>
  )
}

export default Navbar