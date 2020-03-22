import styled from "styled-components"

export const Header = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`
export const Logo = styled.h1`
  color: white;
`
export const Menu = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-end;

  a {
    text-decoration: none;
  }

  li {
    margin: 0 20px;
    color: white;
  }
`