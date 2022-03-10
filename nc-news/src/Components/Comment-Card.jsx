export default function CommentCard({comment}){

    const date = new Date(Date.parse(comment.created_at))

    return ( 
    <li className="commentCard" key={(comment.comment_id)}>
        <div className="comment_author">
        Author: {comment.author} <br/>
        </div>
        Posted: {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}<br/>
        Votes: {comment.votes}<br/><br />
        {comment.body}<br/><br/>
        </li>
    )
}