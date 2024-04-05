import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

function Profile() {
	const { userId } = useParams()
	return (
		<Layout>
			<h1 className="text-blue-600">Profile</h1>
			<h1 className="text-blue-600">User id : {userId}</h1>
		</Layout>
	)
}

export default Profile
