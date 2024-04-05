import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout"

function Home() {
	const navigate = useNavigate()
	return (
		<Layout>
			<div className="text-center mt-20">
				<h1 className="text-blue-600">Home</h1>
				<button onClick={() => navigate("/login")} className="bg-zinc-800 py-2 mx-1 px-4 rounded-lg text-white hover:bg-zinc-900">Login</button>
				<button onClick={() => navigate("/signup")} className="bg-green-400 py-2 px-4 mx-1 rounded-lg hover:bg-green-600">SignUp</button>
				<button onClick={() => navigate("/profile/1")} className="bg-indigo-500 py-2 px-4 mx-1 rounded-lg hover:bg-indigo-700">Profile</button>
				<p>Profile page must be accessed with userId (ex: /profile/1)</p>
			</div>
		</Layout>
	)
}

export default Home
