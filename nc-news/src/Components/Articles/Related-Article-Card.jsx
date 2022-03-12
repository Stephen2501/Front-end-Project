import { Link } from "react-router-dom";

export default function RelatedArticleCard({ article }) {
  return (
    <li className="related-article-card" key={article.article_id}>
      <div className="article-title">
        <Link
          to={`/article/${article.article_id}`}
          article_id={article.article_id}
        >
          {article.title}{" "}
        </Link>
      </div>
    </li>
  );
}
