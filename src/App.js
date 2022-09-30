import React, { Component } from "react";
import "./App.css";
import Reviews from "./components/Reviews";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/reviews/:categories_slug" element={<Reviews />}></Route>
          <Route
            path="/reviews/single/:review_id"
            element={<SingleReview />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
