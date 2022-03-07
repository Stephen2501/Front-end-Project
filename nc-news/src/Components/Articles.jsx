import { useEffect, useState } from "react"
import ArticleCard from './Article-Card'
import TopicDropdown from "./Topic-Dropdown";
import * as articleApi from '../utils/articleApi'

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState('')

    useEffect(() => {
        if(!topic) {
        articleApi.fetchArticles().then((articlesFromApi) => setArticles(articlesFromApi))
        } else {
        articleApi.fetchArticlesByTopic(topic).then((articlesFromApi) => setArticles(articlesFromApi)) 
        }
    }, [topic])

	return (<div id="articlePage">
        <TopicDropdown setTopic={setTopic} />
        <ul className="articleList">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </ul>
    </div>
    )
}