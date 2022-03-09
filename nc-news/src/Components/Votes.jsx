import { useState, useEffect } from "react";
import * as articleApi from '../utils/articleApi'

export default function Votes({article, article_id}) {

    const [vote, setVote] = useState(0)
    const [isDisabled, setIsDisabed] = useState(false)

    useEffect(() => {
        setVote(article.votes)
    }, [article])

    const handleClick = (voteChange) => {
        setVote((currentVotes) => {
            setIsDisabed(true)
            return (currentVotes + voteChange)
        })
        articleApi.voteOnArticle(article_id, {votes: voteChange});
    }

    return (
        <section>
            <div>
                Votes: {vote}
            </div>
            <button disabled={isDisabled} onClick={() => handleClick(1)} >Up-Vote</button>
            <button disabled={isDisabled} onClick={() => handleClick(-1)} >Down-Vote</button>
        </section>
    )
}