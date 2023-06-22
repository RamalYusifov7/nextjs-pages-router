import styles from "@/styles/Home.module.css";
interface Props {
  title: string;
  urlToImage?: string;
  description: string;
  url: string;
}

function SingleBrNews({ urlToImage, title, description, url }: Props) {
  return (
    <div className={styles.card} >
      {urlToImage ? (
        <div className={styles.imgContainer}>
          <img
            src={urlToImage}
            alt={title}
            className={styles.image}
          />
        </div>
      ) : (
        <div className="no-image"></div>
      )}
      <h2 className={styles.articleTitle}>{title}</h2>
      <p className={styles.escription}>{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.readMore}
      >
        Read more
      </a>
    </div>
  );
}

export default SingleBrNews;
