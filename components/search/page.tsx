import fetchNews from "../../utils/fetchNews";
import NewsList from "../NewList/NewsList";

const SearchPage = async ({
  searchParams,
}: {
  searchParams?: { term: string };
}) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
