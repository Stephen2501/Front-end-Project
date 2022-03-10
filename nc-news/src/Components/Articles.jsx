import { useEffect, useState } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from "../utils/articleApi";
import SortByDropdown from "./SortBy-Dropdown";
import { useSearchParams } from "react-router-dom";
import OrderBy from "./Order-By";

export default function Articles({ articles, setArticles }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [topic, setTopic] = useState(undefined);

  useEffect(() => {
    articleApi
      .fetchArticles(topic, sortBy, orderBy)
      .then((articlesFromApi) => setArticles(articlesFromApi));
  }, [topic, sortBy, orderBy]);

  console.log(topic);

  return (
    <div id="articles">
      <SortByDropdown setSortBy={setSortBy} />
      <OrderBy setOrderBy={setOrderBy} />
      <TopicDropdown setTopic={setTopic} />
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
