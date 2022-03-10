import { useEffect } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from "../utils/articleApi";
import SortByDropdown from "./SortBy-Dropdown";
import { useSearchParams } from "react-router-dom";


export default function Articles({articles, setArticles}) {
  
  
  const [searchParams] = useSearchParams()
  let sort_by = searchParams.get('sort_by')
  
  
  useEffect(() => {
    articleApi
    .fetchArticles(sort_by)
    .then((articlesFromApi) => setArticles(articlesFromApi));
  }, [sort_by]);


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
