import { NewsArticle, NewsResponse } from "@/types/news";
import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/Category.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    // this could be coming from an API
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: {
      newsArticles: newsResponse.articles,
    },
  };
};
function Category({ newsArticles }: { newsArticles: NewsArticle[] }) {
  const router = useRouter();
  const title = router.query.category?.toString();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles["category-container"]}>
        <h1 className={styles["category-heading"]}>News Articles</h1>
        <ul>
          {newsArticles.map((article) => (
            <li key={article.title} className={styles["category-article"]}>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className={styles.img}
                />
              )}
              <h2 className={styles["category-title"]}>{article.title}</h2>
              <p className={styles["category-description"]}>
                {article.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Category;
