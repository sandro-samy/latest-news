import { GetServerSidePropsContext } from "next";
import fetchNews from "../../utils/fetchNews";
import NewsList from "../../components/NewList/NewsList";
import { useRouter } from "next/router";

const index = ({ news }: { news: NewsResponse }) => {
  const { term = "" } = useRouter().query;
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let term = "";
  if (context.query.term) {
    term = context.query.term.toString();
    const news: NewsResponse = await fetchNews("general", term, true);
    return {
      props: { news },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
