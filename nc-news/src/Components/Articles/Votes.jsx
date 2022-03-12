import { useState, useEffect } from "react";
import * as articleApi from '../../utils/articleApi'

export default function Votes({article, article_id}) {

    const [vote, setVote] = useState(0)


    useEffect(() => {
        setVote(article.votes)
    }, [article])

    const handleClick = (voteChange) => {
        setVote((currentVotes) => {
            return (currentVotes + voteChange)
        })
        articleApi.voteOnArticle(article_id, {votes: voteChange})
        .catch((err) => setVote(currentVotes => {
            return (currentVotes - voteChange)
        }
        ));
    }
    
let voteChange = vote - article.votes

    return (
        <section>
            <div>
                Votes: {vote}
            </div>
            <button disabled={voteChange === 1} onClick={() => handleClick(1)} >Up-Vote</button>
            <button disabled={voteChange === -1} onClick={() => handleClick(-1)} >Down-Vote</button>
        </section>
    )
}