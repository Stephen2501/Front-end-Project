import { useEffect} from "react";
import * as articleApi from "../utils/articleApi";
import TopicDropdown from "./Topic-Dropdown";
import { useParams } from "react-router-dom";

import ArticleCard from "./Article-Card";

export default function ArticleTopic({ articles, setArticles }) {

    const{topic} = useParams()

  useEffect(() => {
    articleApi
      .fetchArticlesByTopic(topic)
      .then((articleFromApi) => setArticles(articleFromApi));
  }, [articles]);

  return (
    <div>
      <TopicDropdown setArticles={setArticles} />
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
