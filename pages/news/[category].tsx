import React from "react";
import { categories } from "../../utils/data";
import fetchNews from "../../utils/fetchNews";
import NewsList from "../../components/NewList/NewsList";
import { useRouter } from "next/router";

const CategoryPage = ({ news }: { news: NewsResponse }) => {
  const {
    query: { category },
  } = useRouter();

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({
  params: { category },
}: {
  params: {
    category: Category;
  };
}) {
  const news: NewsResponse = await fetchNews(category, "", true);

  if (!news) {
    return { notFound: true };
  }

  return {
    props: {
      news,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const params = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths: params,
    fallback: "blocking",
  };
}
