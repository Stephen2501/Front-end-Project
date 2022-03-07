import { useEffect, useState } from "react"
import ArticleCard from './Article-Card'
import * as articleApi from '../utils/articleApi'

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleApi.fetchArticles().then((articlesFromApi) => setArticles(articlesFromApi))
    }, [])

	return (<div id="articlePage">
        <ul className="articleList">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </ul>
    </div>
    )
}