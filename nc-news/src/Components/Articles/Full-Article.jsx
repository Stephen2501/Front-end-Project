import { useEffect, useState } from "react";
import * as articleApi from "../../utils/articleApi";
import { useParams } from "react-router-dom";
import Votes from "../Articles/Votes";
import PostComment from "../Comments/Post-Comment";
import CommentSection from "../Comments/Comment-Section";

export default function FullArticle({ article, setArticle }) {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    articleApi
      .fetchArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);


  const date = new Date(Date.parse(article.created_at));

  if (error) return <h2>Article does not exist!</h2>;
  if (isLoading) return <h2>Content Loading...</h2>;

  return (
    <article>
      <div className="full-article-top-section">
      <div className="full-article">
        <h1 className="article-head">
          {article.title} <br />
        </h1>
        <div className="full-article-info">
        <div className="created">
          Posted: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}{" "}
          <br />
        </div>
        <div className="full_article_topic">
          Author: {article.author} <br />
          Topic: {article.topic} <br />
        </div>
        <div className="full-article-votes">
          <Votes article={article} article_id={article_id} />
        </div>
        </div>
        <div className="full-article-body">{article.body}</div>
      </div>
      </div>
      <div className="post-comment">
        <PostComment article_id={article_id} />
      </div>
      <div className="comment-section">
        <CommentSection article_id={article_id} />
      </div>
    </article>
  );
}
