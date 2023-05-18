
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = false
  return (
    <Router>

      <TopBar />

      <Routes>
        <Route path="/"element={<Home />}></Route>
        <Route path="/about"element={<About />}></Route>
        <Route path="/login"element={user ? <Home/> : <Login/>}></Route>
        <Route path="/register"element={user ? <Home/> : <Register/>}></Route>
        <Route path="/write"element={<Write/>}></Route>
        <Route path="/settings"element={user ? <Settings/> : <Register/>}></Route>
        <Route path="/singlepage"element={<Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;