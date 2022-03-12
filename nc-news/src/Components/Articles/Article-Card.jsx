import { Link } from "react-router-dom";
export default function ArticleCard({article}) {

    const date = new Date(Date.parse(article.created_at))
    

    return (
        <li className="article-card" key={(article.article_id)}>
            <div className="article-title">
                <Link to={`/article/${article.article_id}`} article_id={article.article_id}>{article.title} </Link>
            </div>
            <div className="article-left">
            Topic: {article.topic}<br/>
            Author: {article.author}<br/>
            </div>
            <div className="article-right">
            Votes: {article.votes}<br/>
            Comment Count: {article.comment_count}<br/>
            Created: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </div>
        </li>
    )
}