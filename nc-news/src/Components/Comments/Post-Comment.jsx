import {useState, useContext} from 'react'
import { postComment } from '../../utils/commentApi'
import { fetchUsers } from '../../utils/userApi'
import { UserLoginContext } from '../../Context/userLogin'

export default function PostComment({article_id}) {

    const {currentUser} = useContext(UserLoginContext)
    const [newComment, setNewComment] = useState({body: ''})
    const [postMsg, setPostMsg] = useState('')
    const [error, setError] = useState(null)

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
					postComment(article_id, newComment).then(() => {
						setPostMsg('Comment posted');
                        event.target.reset()
					});
                }
			})
			.catch((err) => {
				setError({err});
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
                required
            />
        </label> <br/><br />
        <button type='submit'>Post comment</button>
        <h3>{postMsg}</h3>
    </form>
    )
}
