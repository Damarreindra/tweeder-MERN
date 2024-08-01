import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import DetailPost from "./pages/DetailPost";
import UnProtectedRoute from "./auth/UnProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        {/* <Route element={<ProtectedRoute />}></ */}
          
          {/* <Route element={<UnProtectedRoute/>}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          {/* </Route> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/status/:uid" element={<DetailPost />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
