import React from 'react';
import Home from "./screens/Home"
import AddComplain from "./screens/AddComplain"
import "./index.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={AddComplain}/>
    </Switch>
    </Router>
  );
}

export default App;
