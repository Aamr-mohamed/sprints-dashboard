import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup, Profile } from "./Pages";
import { isAuth } from "./utils/QuickFoo";

function App() {
	const Auth = isAuth()
	return (
		<Routes>
			<Route path="/" element={Auth ? <Home /> : <Navigate to="/login" />} />
			<Route path="/profile/:userId" element={Auth ? <Profile /> : <Navigate to="/login" />} />   { /* profile page must have userId in the url params */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>

	);
}

export default App;
