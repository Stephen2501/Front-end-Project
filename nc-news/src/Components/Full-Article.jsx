import { useEffect } from "react";
import * as articleApi from "../utils/articleApi";
import { useParams } from "react-router-dom";

export default function FullArticle({ article, setArticle }) {
  const { article_id } = useParams();

  useEffect(() => {
    articleApi
      .fetchArticleById(article_id)
      .then((articleFromApi) => setArticle(articleFromApi));
  }, []);

  return (
    <div className="full_article">
      <h1 className="article_h1">
        {article.title} <br />
      </h1>
      <h2 className="full_article_topic">
        Author: {article.author} <br />
        Topic: {article.topic} <br />
      </h2>
      <div className="full_article_body">
        {article.body} <br /> <br />
      </div>
      <div className="full_article_info">
          Votes: {article.votes} <br/>
          Posted: {article.created_at} <br />
      </div>
    </div>
  );
}
