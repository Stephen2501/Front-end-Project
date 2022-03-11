import { useEffect, useState } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "../Filters/Topic-Dropdown";
import * as articleApi from "../../utils/articleApi";
import SortByDropdown from "../Filters/SortBy-Dropdown";


import OrderBy from "../Filters/Order-By";

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
      <div className="sorts">
      <SortByDropdown setSortBy={setSortBy} />
      <div className="order">
      <OrderBy setOrderBy={setOrderBy} />
      </div>
      <TopicDropdown />
      </div>
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>

  );
}
