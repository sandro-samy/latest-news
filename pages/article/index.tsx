import { useRouter } from "next/router";
import Article from "../../components/article/Article";
const ArticlePage = () => {
  const { query } = useRouter();

  if (
    (typeof query === "object" && Object.entries(query).length === 0) ||
    typeof query !== "object"
  ) {
    <>404 Not Found </>;
  } else {
    const article = query as unknown as Article;
    console.log(article)
    return <Article article={article} />;
  }
};

export default ArticlePage;
