
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
  // Switch,
  // Topbar,
  Route
} from "react-router-dom";

function App() {
  const user = false
  return (

    // <Router>
    //   <Topbar>
    //   <Switch>
    //     <Route exact path="/"> <Home /> </Route>
    //     <Route path="/posts"> <Home />  </Route>
    //     <Route path="/register"> {user ? <Home /> : <Register />} </Route>
    //     <Route path="/login">{user ? <Home /> : <Login />}</Route>
    //     <Route path="/post/:id"> <Single /> </Route>
    //     <Route path="/write">{user ? <Write /> : <Login />}</Route>
    //     <Route path="/settings"> {user ? <Settings /> : <Login />} </Route>
    //     <Route path="/about"> <About/> </Route>
    //   </Switch>
    //   </Topbar>
    // </Router>

    <Router>

      <TopBar />

      <Routes>
        <Route exact path="/"element={<Home />}></Route>
        <Route path="/posts" element={<Home/>}></Route>
        <Route path="/about"element={<About />}></Route>
        <Route path="/register"element={user ? <Home/> : <Register/>}></Route>
        <Route path="/login"element={user ? <Home/> : <Login/>}></Route>
        <Route path="/write"element={user ? <Write/>: <Register/>}></Route>
        <Route path="/settings"element={user ? <Settings/> : <Register/>}></Route>
        <Route path="/singlepage"element={<Single />}></Route>
      </Routes>

    </Router>
  );
}

export default App;