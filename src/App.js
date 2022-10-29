import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ReviewCard from "./components/SingleReview";
import AllReviews from "./components/Reviews";
import Categories from "./components/Category";
import Users from "./components/Users";
import Home from "./components/Home";

  function App() {
  return (
   
      <div className="App">
        <Header />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/:category" element={<AllReviews />} />
          <Route
            path="/reviews/singleReview/:review_id"
            element={<ReviewCard />}
          />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    
  );
}

export default App;
