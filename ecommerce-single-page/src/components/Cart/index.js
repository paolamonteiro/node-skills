import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from "../CartContext"
import { ShoppingCart, CartItem, CartItemPic, CartItemDescription, Total } from "../../styles/CartContent"

const Cart = () => {
  const [cart] = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => (acc + item.price), 0)
    setTotal(newTotal)
  }, [cart])
  
  return (
    <ShoppingCart>
      <h1>Cart</h1>

      {cart.map((item, index) => (
        <CartItem key={index}>
          <CartItemPic>{
            <img src={require("../images/default-img.png")} alt={item.description} />}
          </CartItemPic>
          <CartItemDescription>
            <p>{item.description} ${item.price.toFixed(2)}</p>
          </CartItemDescription>
        </CartItem>
      ))}

      <Total>
        <p>Total of items: {cart.length}</p>
        <p>Total price: ${total.toFixed(2)}</p>
      </Total>
    </ShoppingCart>
  )
}

export default Cart