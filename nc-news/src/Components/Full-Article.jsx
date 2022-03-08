import { useEffect, useState } from "react"
import * as articleApi from '../utils/articleApi'

export default function FullArticle(article_id) {
    console.log({article_id})
    const [article, setArticle] = useState('');

    useEffect(() => {
        articleApi.fetchArticleById(article_id).then((articleFromApi) => setArticle(articleFromApi))
    }, [])

    return (
        <div id="fullArticle" >
        <div> {article} </div>
        </div>
    )
}