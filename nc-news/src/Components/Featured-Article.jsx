import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/articleApi";

export default function FeaturedArticle({article, setArticle}) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles('votes', 'DESC').then((articlesFromApi) => {
            setArticle(articlesFromApi[0])
            setIsLoading(false)
        })
    }, [])


    const date = new Date(Date.parse(article.created_at));

    if(isLoading) return <h2>Content loading...</h2>  


  return (
    <div className="featured-article">
      <h2>{article.title}</h2>
      {article.topic} <br/>
      Author: {article.author} <br />
      Votes: {article.votes} <br/>
      Posted: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}{" "} <br/>
      <div className="featured-article-body">
      {article.body} <br/>
      </div>
    </div>
  );
}
