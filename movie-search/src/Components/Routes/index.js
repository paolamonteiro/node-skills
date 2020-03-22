import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "../Navbar"
import Home from "../Home"
import Movies from "../Movies"

const Routes = () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={Movies} />
      </Switch>
    </>
  </Router>
)

export default Routes