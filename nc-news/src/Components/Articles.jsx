import { useEffect, useState } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from "../utils/articleApi";
import SortByDropdown from "./SortBy-Dropdown";


import OrderBy from "./Order-By";

export default function Articles({ articles, setArticles }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    articleApi
      .fetchArticles(sortBy, orderBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi)
        setIsLoading(false)
      });
  }, [sortBy, orderBy]);

  if(isLoading) return <h2>Content loading...</h2>

  return (

    <div id="articles">
      <SortByDropdown setSortBy={setSortBy} />
      <OrderBy setOrderBy={setOrderBy} />
      <TopicDropdown />
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>

  );
}
