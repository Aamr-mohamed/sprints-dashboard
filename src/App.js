import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup, Profile, EditProfile } from "./Pages";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import { useAuth } from "./utils/context";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile/:userId"
        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/edit/:userId" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
