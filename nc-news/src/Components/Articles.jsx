import { useEffect, useState } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from "../utils/articleApi";
import SortByDropdown from "./SortBy-Dropdown";


export default function Articles({articles, setArticles}) {
  

  useEffect(() => {
    articleApi
      .fetchArticles()
      .then((articlesFromApi) => setArticles(articlesFromApi));
  }, []);

  return (
      <div id="articles">
        <SortByDropdown />
        <TopicDropdown />
        <ul className="articleList">
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </div>
  );
}
