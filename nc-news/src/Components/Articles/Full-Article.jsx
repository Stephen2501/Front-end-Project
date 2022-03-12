import { useEffect, useState } from "react";
import * as articleApi from "../../utils/articleApi";
import { useParams } from "react-router-dom";
import Votes from "../Articles/Votes";
import PostComment from "../Comments/Post-Comment";
import CommentSection from "../Comments/Comment-Section";
import RelatedArticles from "./Related-Articles";

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
  }, [article]);

  const date = new Date(Date.parse(article.created_at));

  if (error) return <h2>Article does not exist!</h2>;
  if (isLoading) return <h2>Content Loading...</h2>;

  return (
    <article>
      <div className="full-article-top-section">
        <div className="full_article">
          <h1 className="article_h1">
            {article.title} <br />
          </h1>
          <div className="created">
            Posted:{" "}
            {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}{" "}
            <br />
          </div>
          <h2 className="full_article_topic">
            Author: {article.author} <br />
            Topic: {article.topic} <br />
          </h2>
          <div className="full_article_info">
            <Votes article={article} article_id={article_id} />
          </div>
          <div className="full_article_body">{article.body}</div>
        </div>
        <div className="related-article">
          <RelatedArticles topic={article.topic} />
        </div>
      </div>
      <div className="post_comment">
        <PostComment article_id={article_id} />
      </div>
      <div className="comment_section">
        <CommentSection article_id={article_id} />
      </div>
    </article>
  );
}
