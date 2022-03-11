import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/userApi";
import UserCard from "./User-Card";

export default function Users() {

	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetchUsers().then((usersFromApi) => {
			setUsers(usersFromApi)
			setIsLoading(false)
		})
	}, [])


	if(isLoading) return <h2>Content loading...</h2>


	return (
	<div>
	<ul className="articleList">
        {users.map((user) => (
          <UserCard key={user.username} user={user} />
        ))}
      </ul>
    </div>
	)
}