import React, { useId } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import axios from 'axios';
import { useState, useEffect } from "react";

function Profile() {
	const [user, setUser] = useState(null)
	const { userId } = useParams()
	const baseURL = `https://dummyjson.com/users/${userId}`
	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setUser(response.data);
		});
	}, [userId]);
	console.log(user)
	if (user) {
		return (
			<Layout>
				<h1 className="text-blue-600">Profile</h1>
				<h1 className="text-blue-600">User id : {userId}</h1>
				<h1>Username: {user.username}</h1>
				<h1>Fullname: {user.firstName}{user.maidenName}{user.lastName}</h1>
				<h1>Email: {user.email}</h1>
				<h1>Phone Number: {user.phone}</h1>
				<h1>Address: {user.address.address},{user.address.city}</h1>
			</Layout>
		)
	}
	else {
		return (
			<Layout>
				<h1>404  User Not Found</h1>
			</Layout>
		)
	}
}

export default Profile
