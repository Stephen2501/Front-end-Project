export default function UserCard({user}) {
    return (
        <div className="user-card">
            Name: {user.name}<br/>
            Username: {user.username}<br/>
            <img className="user-avatar" src={user.avatar_url} alt={`image of ${user.username}`} />
        </div>
    )
}