import {useContext} from 'react';

export default function ArticleCard({article}) {

    return (
        <li className="articleCard" key={(article.article_id)}>
            <div className="article_title">
            {article.title}
            </div>
            <div className="article_topic">
            {article.topic}
            </div>
            <div className="article_author">
            {article.author}
            </div>
            <div className="article_votes">
            {article.votes}
            </div>
            <div className="article_date">
            {article.created_at}
            </div>
            <div className="article_comment_count">
            {article.comment_count}
            </div>
        </li>
    )
}