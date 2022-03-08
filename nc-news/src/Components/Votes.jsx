import { useState } from "react";
import * as articleApi from '../utils/articleApi'

export default function Votes({votes, article_id}) {
    
    const [vote, setVote] = useState(votes)
    const handleClick = (voteChange) => {
        setVote((currentVotes) => (currentVotes + voteChange))
        articleApi.voteOnArticle(article_id, voteChange);
    }

    return (
        <section>
            <div>
                Votes: {vote}
            </div>
            <button onClick={() => handleClick(1)}>Up-Vote</button>
            <button onClick={() => handleClick(-1)}>Down-Vote</button>
        </section>
    )
}