import styled from "styled-components"

export const SearchBox = styled.div`
  margin-top: 100px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 30%;
  }
  
  h2 {
    color: white;
  }
`