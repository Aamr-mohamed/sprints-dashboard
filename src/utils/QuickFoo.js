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

export function isAuth() {
	const userJson = localStorage.getItem("user");
	if (!userJson) return false;
	try {
		const user = JSON.parse(userJson);

		return true;
	} catch (error) {
		console.error("Error parsing user from localStorage:", error);
		return false;
	}
}
