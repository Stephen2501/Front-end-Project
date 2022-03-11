import { Link } from "react-router-dom";

export default function RandomArticle() {
  let randomArticle = Math.floor(Math.random() * 36);

  return (
    <div className="random-article">
      <Link to={`/article/${randomArticle}`}>
        <button>Random Article</button>
      </Link>
    </div>
  );
}
