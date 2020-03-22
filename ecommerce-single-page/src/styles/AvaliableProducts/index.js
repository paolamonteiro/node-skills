import styled from "styled-components"

export const ItemList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #C4DBF6;
  float: right;
  width: 80%;
`
export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #87CEFA;
  margin: 10px;
  width: 200px;
  max-height: 320px;
  border: solid #6A5ACD;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`
export const ItemtPic = styled.div`
  width: 150px;
  height: 150px;
`
export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding-bottom: 20px;
`
export const Button = styled.button`
  background-color: #6A5ACD;
  color: white;
  border-radius: 10px;
`