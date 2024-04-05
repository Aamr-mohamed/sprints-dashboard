import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup, Profile } from "./Pages";

function App() {
	const isAuth = JSON.parse(localStorage.getItem("user"))
	return (
		<Routes>
			<Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
			<Route path="/profile/:userId" element={isAuth ? <Profile /> : <Navigate to="/login" />} />   { /* profile page must have userId in the url params */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>

	);
}

export default App;
