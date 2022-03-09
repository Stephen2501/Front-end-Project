import { useState, useEffect } from "react";
import * as articleApi from '../utils/articleApi'

export default function Votes({article, article_id}) {

    const [vote, setVote] = useState(0)

    useEffect(() => {
        setVote(article.votes)
    }, [article])

    const handleClick = (voteChange) => {
        console.log(vote)
        setVote((currentVotes) => {
            console.log(currentVotes)
            return (currentVotes += voteChange)
        })
        articleApi.voteOnArticle(article_id, {votes: voteChange});
    }
    console.log(vote)

    return (
        <section>
            <div>
                Votes: {vote}
            </div>
            <button onClick={() => handleClick(1)} >Up-Vote</button>
            <button onClick={() => handleClick(-1)} >Down-Vote</button>
        </section>
    )
}