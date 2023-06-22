import SingleBrNews from "@/components/SingleBrNews";
import styles from "@/styles/Home.module.css";
import { NewsArticle, NewsResponse } from "@/types/news";
import Head from "next/head";

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: {
      newsArticles: newsResponse.articles,
    },
  };
};

export default function BreakingNews({
  newsArticles,
}: {
  newsArticles: NewsArticle[];
}) {
  return (
    <>
      <Head>
        <title>Breaking News</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Breaking News</h1>
        <div className={styles.grid}>
          {newsArticles.map((article, index) => (
            <SingleBrNews key={index} {...article} />
          ))}
        </div>
      </main>
    </>
  );
}
