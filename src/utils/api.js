import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-vondry.herokuapp.com/api/",
});

export const getReviews = (category, sortBy, orderBy) => {
  return gamesApi
    .get("/reviews", {
      params: { category: category, sort_by: sortBy, order: orderBy },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data;
  });
};

export const reviewByID = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
};
export const voteOnReview = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
};
export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data;
  });
};
export const postComment = (review_id, author, body) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, { username: author, body: body })
    .then((res) => {
      return res.data.comment;
    });
};
export const allUsers = () => {
  return gamesApi.get("/users").then((res) => {
    return res.data;
  });
};
export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
