import { gql } from "graphql-request";
import sortNewsByImage from "./sortedNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQl query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        category: $categories
        sort: "published_desc"
        keyword: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch Function with Next 13 caching...
//   const res = await fetch(
//     "https://bamiantong.stepzen.net/api/invited-albatross/__graphql",
//     {
//       method: "POST",
//       cache: isDynamic ? "no-cache" : "default",
//       next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
//       },
//       body: JSON.stringify({
//         query,
//         variables: {
//           access_key: process.env.MEDIASTACK_API_KEY,
//           categories: category,
//           keywords: keywords,
//         },
//       }),
//     }
//   );

//   console.log(
//     "LOADING NEW DATA FROM API FOR CATEGORY >>> ",
//     category,
//     keywords
//   );

//   const newsResponse = await res.json();
//   console.log(JSON.stringify(newsResponse));

//   // Sort function by Images vs not images preset
//   const news = sortNewsByImage(newsResponse?.data.myQuery);

//   return news
// };

// http://api.mediastack.com/v1/news?access_key=d83d8d50d802c49d2d2a5f95a79389fb&sources=business,sports

export default fetchNews;
