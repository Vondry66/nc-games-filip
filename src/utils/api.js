import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-vondry.herokuapp.com/api/",
});

export const getReviews = (categories_slug) => {
  return gamesApi.get(`/reviews?category=${categories_slug}`).then((res) => {
    return res.data;
  });
};

export const getCategory = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
