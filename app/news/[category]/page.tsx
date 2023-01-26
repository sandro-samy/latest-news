import React from "react";
import { categories } from "../../../utils/data";
import fetchNews from "../../../utils/fetchNews";
import NewsList from "../../NewsList";

const CategoryPage = async ({
  params: { category },
}: {
  params: {
    category: Category;
  };
}) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default CategoryPage;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
