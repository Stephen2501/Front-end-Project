import { useEffect, useState} from "react";
import * as articleApi from "../../utils/articleApi";
import TopicDropdown from "../Filters/Topic-Dropdown";
import { useParams } from "react-router-dom";

import ArticleCard from "./Article-Card";

export default function ArticleTopic({ articles, setArticles }) {

    const{topic} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

  useEffect(() => {
    articleApi
      .fetchArticlesByTopic(topic)
      .then((articleFromApi) => {
        setArticles(articleFromApi)
        setIsLoading(false)
      }).catch((err) => {
        setError({err})
      });
  }, [articles]);

  if (error) return <h2>Topic does not exist!</h2>;
  if (isLoading) return <h2>Content Loading...</h2>;

  return (
    <div>
      <TopicDropdown />
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
