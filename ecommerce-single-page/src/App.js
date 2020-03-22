import React from 'react'
import './index.css'
import Navbar from "./components/Navbar"
import Content from './components/Content'
import { CartProvider } from './components/CartContext'

const App = () => 
  <main className="app">
    <CartProvider>
      <Navbar />
      <Content />
    </CartProvider>
  </main>

export default App