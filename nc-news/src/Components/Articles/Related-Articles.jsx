import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../../utils/articleApi";
import RelatedArticleCard from "./Related-Article-Card";

export default function RelatedArticles({ topic }) {
  const [relatedTopicArticles, setRelatedTopicArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticlesByTopic(topic)
      .then((articlesFromApi) => {
        setRelatedTopicArticles(articlesFromApi.slice(0, 4));
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (error) return <h2>Could not retrieve related articles</h2>;
  if (isLoading) return <h2>Content is Loading...</h2>;

  return (
    <div className="related-article-section">
      <div className="related-article-title">
      Related Articles
      </div>
      <ul className="related-article-list">
        {relatedTopicArticles.map((article) => (
          <RelatedArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
