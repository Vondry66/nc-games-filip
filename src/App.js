import React, { Component } from "react";
import "./App.css";
import Reviews from "./components/Reviews";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="Reviews" element={<Reviews />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
