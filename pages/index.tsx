import React from "react";
import { categories } from "../utils/data";
import fetchNews from "../utils/fetchNews";
import NewsList from "../components/NewList/NewsList";
import Head from "next/head";

const index = ({ news }: { news: NewsResponse }) => {
  return (
    <>
      <Head>
        <title>Home | Latest News</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NewsList news={news} />
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news)

  return {
    props: { news },
  };
}
