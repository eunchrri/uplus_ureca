import { Article } from "@/types/news";
import styles from "./news.module.scss";
import { handleApi } from "@/utils/handleApi";
import { fetchNews } from "@/service/news";
import NewsItem from "@/components/news/NewsItem";

export default async function NewsList() {
  const { data: articles, error } = await handleApi(fetchNews);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  return (
    <div className={styles.newsList}>
      {articles?.map((article: Article) => (
        <NewsItem key={article.url} article={article} />
      ))}
      {articles?.length === 0 && <div className={styles.noData}>No Data</div>}
    </div>
  );
}
