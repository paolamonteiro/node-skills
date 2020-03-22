import React, { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import { ItemList, ItemCard, ItemtPic, ItemDescription, Button } from "../../styles/AvaliableProducts"

const Products = () => {
  const [state] =  useState({
    products: [
      { id: 1, description: "Book one", price: 14.99 },
      { id: 2, description: "Book two", price: 8.90 },
      { id: 3, description: "Book three", price: 20.99 },
      { id: 4, description: "Book four", price: 2.50 },
      { id: 5, description: "Book five", price: 10.99 },
      { id: 6, description: "Book six", price: 14.90 },
      { id: 7, description: "Book seven", price: 8.50 },
      { id: 8, description: "Book eight", price: 20.99 },
      { id: 9, description: "Book nine", price: 2.90 },
      { id: 10, description: "Book ten", price: 10.50 },
    ]
  })

  const list = state.products.map(item => (
      <ProductCard key={item.id} item={item}/>
  ))
  
  return (
    <ItemList>
      {list}
    </ItemList>
  ) 
}

const ProductCard = ({item}) => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    const product = {id: item.id, description: item.description, price: item.price}
    setCart([...cart, product])
  }

  return (
    <ItemCard>
      <ItemtPic>
        <img src={require("../images/default-img.png")} alt={item.description} width="100%"></img>
      </ItemtPic>
      <ItemDescription>
        <h4>{item.description}</h4>
        <h5>${item.price.toFixed(2)}</h5>
        <Button type="submit" onClick={addToCart}>Buy now</Button>
      </ItemDescription>
    </ItemCard>
  )
}

export default Products