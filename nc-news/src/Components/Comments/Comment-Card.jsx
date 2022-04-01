import { deleteCommentById } from "../../utils/commentApi";
import { useContext, useState } from "react";
import { UserLoginContext } from "../../Context/userLogin";

export default function CommentCard({ comment }) {
  const [deleteMsg, setDeleteMsg] = useState("");
  const { currentUser } = useContext(UserLoginContext);
  const date = new Date(Date.parse(comment.created_at));

  const handleDelete = () => {
    if (comment.author === currentUser) {
      deleteCommentById(comment.comment_id);
      setDeleteMsg("Comment deleted");
    } else {
      setDeleteMsg("Can't delete comment that you are not author of");
    }
  };

  return (
    <li className="comment-card" key={comment.comment_id}>
      <div className="comment-author">
        Author: {comment.author} <br />
      </div>
      <div className="comment-info">
      Posted: {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
      <br />
      Votes: {comment.votes}
      <br />
      <br />
      </div>
      <div className="comment-body">
      {comment.body}
      </div>
      <br />
      <br />
      <button className="delete-comment" onClick={() => handleDelete()} value="delete item">
        Delete item
      </button>
      <br />
      {deleteMsg}
    </li>
  );
}
