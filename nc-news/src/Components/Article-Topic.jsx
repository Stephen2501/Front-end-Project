import { useEffect} from "react";
import * as articleApi from "../utils/articleApi";
import TopicDropdown from "./Topic-Dropdown";
import SortByDropdown from "./SortBy-Dropdown";
import { useParams } from "react-router-dom";

import ArticleCard from "./Article-Card";
import OrderBy from "./Order-By";

export default function ArticleTopic({ articles, setArticles }) {

    const{topic} = useParams()

  useEffect(() => {
    articleApi
      .fetchArticlesByTopic(topic)
      .then((articleFromApi) => setArticles(articleFromApi));
  }, [articles]);

  return (
    <div>
      <SortByDropdown />
      <OrderBy />
      <TopicDropdown />
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
