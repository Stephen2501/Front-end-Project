import {useState} from 'react'
import { postComment } from '../utils/commentApi'
import { fetchUsers } from '../utils/userApi'
import moment from 'react-moment'

export default function PostComment({article_id}) {

    const [newComment, setNewComment] = useState({})
    const [postMsg, setPostMsg] = useState('')

    const handleSubmit = (event) => {
		event.preventDefault();
		fetchUsers()
            .then((res) => {
                let realUser = false
                res.forEach((actualUser) => {
                    if (actualUser.username === newComment.username) {
                    realUser = true
                }})
				if (realUser) {
                    console.log(newComment)
					postComment(article_id, newComment).then(() => {
						setPostMsg('Comment posted');
                        event.target.reset()
					});
                } else {
                    setPostMsg('Unable to post comment');
                }
			})
			.catch(() => {
				setPostMsg('Unable to post comment');
			});
	};

    return (
        <form onSubmit={handleSubmit}>
        <label className='comment_username'>
            Username: <span />
            <input
                onChange={(event) =>
                    setNewComment((preComment) => {
                        return { ...preComment, username: event.target.value };
                    })
                }
                required
            />
        </label> <br/><br />
        <label className='comment_body'>
            Body: <span />
            <input
                onChange={(event) =>
                    setNewComment((preComment) => {
                        return { ...preComment, body: event.target.value};
                    })
                }
            />
        </label> <br/><br />
        <button type='submit'>Post comment</button>
        <h3>{postMsg}</h3>
    </form>
    )
}
