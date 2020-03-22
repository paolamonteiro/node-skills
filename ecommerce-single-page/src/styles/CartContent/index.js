import styled from "styled-components"

export const ShoppingCart = styled.aside`
  background-color: #86B3D1;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  float: left;
  border-right: solid #6A5ACD;
  padding: 5px 30px;
    h1 {
    font-weight: bold;
    align-self: center;
    color: rgb(46, 85, 117);
    }
`

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid thin #6A5ACD;
  width: 100%;
`
export const CartItemPic = styled.div`
  width: 20%;
    img {
      width: 100%;
    }
`
export const CartItemDescription = styled.div`
  width:50%;
`
export const Total = styled.div`
  padding: 20px;
  align-self: center;
  color: rgb(46, 85, 117);
`