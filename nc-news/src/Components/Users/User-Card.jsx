export default function UserCard({user}) {
    return (
        <div className="user_card">
            Name: {user.name}<br/>
            Username: {user.username}<br/>
            <img className="user_avatar" src={user.avatar_url} alt={`image of ${user.username}`} />
        </div>
    )
}