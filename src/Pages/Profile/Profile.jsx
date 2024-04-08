import React, { useId } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import axios from 'axios';
import { useState, useEffect } from "react";
import User from "@heroicons/react/24/solid/UserIcon"
import Phone from "@heroicons/react/24/solid/PhoneIcon"
import Envelope from "@heroicons/react/24/solid/EnvelopeIcon"
import Home from "@heroicons/react/24/solid/HomeIcon"
import UserCircle from "@heroicons/react/24/solid/UserCircleIcon"
import Identification from "@heroicons/react/24/solid/IdentificationIcon"



function Profile() {
	const [user, setUser] = useState(null)
	const { userId } = useParams()
	const baseURL = `https://dummyjson.com/users/${userId}`
	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setUser(response.data);
		});
	}, [userId]);
	document.title = "User Profile"
	if (user) {
		return (
			<Layout>
				<div class="mt-14 w-full md:w-3/4">
					<div class="px-4 py-5 sm:px-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900 inline-flex">
							< Identification className="w-5 h-5 text-black mr-2 my-1" /> User Info
						</h3>
					</div>
					<div class="border-t border-gray-200">
						<dl>
							<div className="gray-row">
								<dt class="table-font-style-left">
									<UserCircle className="w-4 h-4 text-black mr-2" />Username
								</dt>
								<dd class="table-font-style-right">
									{user.username}
								</dd>
							</div>
							<div class="white-row">
								<dt class="table-font-style-left">
									<User className="w-4 h-4 text-black mr-2" />Full name
								</dt>
								<dd class="table-font-style-right">
									{user.firstName} {user.lastName}
								</dd>
							</div>
							<div className="gray-row">
								<dt class="table-font-style-left">
									<Envelope className="w-4 h-4 text-black mr-2" />Email
								</dt>
								<dd class="table-font-style-right">
									{user.email}
								</dd>
							</div>
							<div class="white-row">
								<dt class="table-font-style-left">
									<Phone className="w-4 h-4 text-black mr-2" />Phone Number
								</dt>
								<dd class="table-font-style-right">
									{user.phone}
								</dd>
							</div>
							<div className="gray-row">
								<dt class="table-font-style-left">
									<Home className="w-4 h-4 text-black mr-2" />Address
								</dt>
								<dd class="table-font-style-right">
									{user.address.address}, {user.address.city}
								</dd>
							</div>
						</dl>
					</div>
				</div>
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
