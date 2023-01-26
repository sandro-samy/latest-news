import React from "react";
import { categories } from "../utils/data";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList
        news={{
          data: [],
          pagination: { total: 0, offset: 0, limit: 0, count: 0 },
        }}
      />
    </div>
  );
};

export default Homepage;
