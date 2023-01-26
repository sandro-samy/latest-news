import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimeStamp";
const ArticlePage = ({ searchParams }: { searchParams: Article }) => {
  console.log(searchParams);
  if (Object.keys(searchParams).length === 0) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image ? (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        ) : null}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            {article.author !== "null" ? (
              <h2 className="font-bold">By: {article.author}</h2>
            ) : null}
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4 mb-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
