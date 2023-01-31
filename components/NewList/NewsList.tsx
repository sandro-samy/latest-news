import React from "react";
import ArticleCard from "./ArticleCard";

const NewsList = ({ news }: { news: NewsResponse }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((article: Article, index: number) => (
        <ArticleCard article={article} key={article.title + index} />
      ))}
    </main>
  );
};

export default NewsList;
