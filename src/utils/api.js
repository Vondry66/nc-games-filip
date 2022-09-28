import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const gamesApi = axios.create({
  baseURL: "https://nc-games-vondry.herokuapp.com/api/",
});

export const getReviews = (categories_slug) => {
  return gamesApi
    .get(`/reviews`, {
      params: { category: categories_slug },
    })
    .then((res) => {
      return res.data;
    });
};

export const getCategory = () => {
  return gamesApi.get("/categories").then((res) => {
    console.log(res.data.categories);
    return res.data.categories;
  });
};
