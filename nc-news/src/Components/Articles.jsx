import { useEffect, useState } from "react";
import ArticleCard from "./Article-Card";
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from "../utils/articleApi";
import SortByDropdown from "./SortBy-Dropdown";
import { useSearchParams } from "react-router-dom";
import OrderBy from "./Order-By";


export default function Articles({articles, setArticles}) {
  
  const [ sortBy, setSortBy] = useState('DESC')
  const [searchParams] = useSearchParams()

  let sort_by = searchParams.get('sort_by')
  
  
  useEffect(() => {
    if(!sort_by){
    articleApi
    .fetchArticles()
    .then((articlesFromApi) => setArticles(articlesFromApi));
    } else {
      articleApi
    .fetchArticles(sort_by)
    .then((articlesFromApi) => setArticles(articlesFromApi));
    }
  }, [sort_by]);


  return (
      <div id="articles">
        <SortByDropdown setSortBy={setSortBy}/>
        <OrderBy sortBy={sortBy}/>
        <TopicDropdown />
        <ul className="articleList">
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </div>
  );
}
