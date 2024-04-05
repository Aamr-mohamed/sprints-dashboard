export function getUserById(id) {
	const users = JSON.parse(localStorage.getItem('users'))
	const user = users.find((ele) => ele.id === id)
	return user

}

export function getUsers() {
	const users = JSON.parse(localStorage.getItem('users'))
	return users
}

export function getCurrentUser() {
	const user = JSON.parse(localStorage.getItem('user'))
	return user
}

export function deleteUserById(id) {
	const users = JSON.parse(localStorage.getItem('users'))
	const updateUsers = users.filter((user) => user.id !== id)
	localStorage.setItem("users", JSON.stringify(updateUsers))
	return updateUsers
}
