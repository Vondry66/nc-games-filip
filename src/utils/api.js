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
export const patchVotes = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.review;
    });
};
export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (review_id) => {
  return gamesApi
    .post(`reviews/${review_id}/comments`, { body: newComment })
    .then((res) => {
      return res.data.comments;
    });
};
