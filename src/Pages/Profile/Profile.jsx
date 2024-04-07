import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

function Profile() {
	const usersList = JSON.parse(localStorage.getItem("users") || "[]")
	const { userId } = useParams()
	const user = usersList[userId]
	if (user) {
		return (
			<Layout>
				<h1 className="text-blue-600">Profile</h1>
				<h1 className="text-blue-600">User id : {userId}</h1>
				<h1>Address: {user.address}</h1>
				<h1>Country: {user.country}</h1>
				<h1>Email: {user.email}</h1>
				<h1>Fullname: {user.fullname}</h1>
				<h1>Phone Number: {user.phoneNumber}</h1>
			</Layout>
		)
	}
	else {
		return (
			<Layout>
				<h1>404 User Not Found</h1>
			</Layout>
		)
	}
}

export default Profile
