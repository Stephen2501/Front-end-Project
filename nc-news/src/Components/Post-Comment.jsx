import {useState, useContext} from 'react'
import { postComment } from '../utils/commentApi'
import { fetchUsers } from '../utils/userApi'
import { UserLoginContext } from '../Context/userLogin'

export default function PostComment({article_id}) {

    const {currentUser, setCurrentUser} = useContext(UserLoginContext)
    const [newComment, setNewComment] = useState({body: ''})
    const [postMsg, setPostMsg] = useState('')

    const handleSubmit = (event) => {
		event.preventDefault();
		fetchUsers()
            .then((res) => {
                let realUser = false
                res.forEach((actualUser) => {
                    if (actualUser.username === currentUser) {
                    realUser = true
                }})
				if (realUser) {
                    console.log(newComment)
					postComment(article_id, newComment).then(() => {
						setPostMsg('Comment posted');
                        event.target.reset()
					});
                } else {
                    setPostMsg('Unable to post comment, user does not exist');
                }
			})
			.catch(() => {
				setPostMsg('Unable to post comment, user does not exist');
			});
	};

    return (
        <form onSubmit={handleSubmit}>
        <label className='comment_body'>
            Body: <span />
            <input
            value={newComment.body}
                onChange={(event) =>
                    setNewComment((preComment) => {
                        return { ...preComment, username: currentUser, body: event.target.value};
                    })
                }
            />
        </label> <br/><br />
        <button type='submit'>Post comment</button>
        <h3>{postMsg}</h3>
    </form>
    )
}
