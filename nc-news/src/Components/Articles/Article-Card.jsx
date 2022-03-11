import { Link } from "react-router-dom";
export default function ArticleCard({article}) {

    const date = new Date(Date.parse(article.created_at))
    

    return (
        <li className="articleCard" key={(article.article_id)}>
            <div className="article_title">
                <Link to={`/article/${article.article_id}`} article_id={article.article_id}>{article.title} </Link>
            </div>
            <div className="article_topic">
            Topic: {article.topic}
            </div>
            <div className="article_author">
            Author: {article.author}
            </div>
            <div className="article_votes">
            Votes: {article.votes}
            </div>
            <div className="article_comment_count">
            Comment Count: {article.comment_count}
            </div>
            <div className="article_date">
            Created: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </div>
        </li>
    )
}