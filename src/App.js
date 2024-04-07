import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup, Profile } from "./Pages";
import { isAuth } from "./utils/QuickFoo";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import EditUser from "./Components/EditUser/EditUser.jsx";

function App() {
	const Auth = isAuth()
	return (
		<Routes>
			<Route path="/" element={Auth ? <Dashboard /> : <Navigate to="/login" />} />
			<Route path="/profile/:userId" element={Auth ? <Profile /> : <Navigate to="/login" />} />   { /* profile page must have userId in the url params */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			{/* <Route path="/dashboard" element={<Dashboard />} /> */}
			<Route path="/edit/:userId" element={<EditUser />} />
		</Routes>

	);
}

export default App;
