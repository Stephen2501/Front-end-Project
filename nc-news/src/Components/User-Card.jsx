export default function UserCard({user}) {
    return (
        <div className="user_card">
            {user.username}<br/>
            {user.name}<br/>
            <img className="user_avatar" src={user.avatar_url} alt={`image of ${user.username}`} />
        </div>
    )
}