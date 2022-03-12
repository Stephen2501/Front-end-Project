import { fetchComments } from "../../utils/commentApi";
import { useEffect, useState } from "react";
import CommentCard from "./Comment-Card";

export default function CommentSection({article_id}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
        })
    }, [comments])


    return <div>
       <ul className="comment-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </div>
}