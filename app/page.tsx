import React from "react";
import { categories } from "../utils/data";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList
        news={news}
      />
    </div>
  );
};

export default Homepage;
