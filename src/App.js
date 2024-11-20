import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Feed from "./pages/Feed"
import Comments from "./pages/Comments";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Feed" element={<Feed />}/>
        <Route path="/Comments" element={<Comments/>}/>
        <Route path="/Notifications"element={<Notifications/>}/>
      </Routes>
    </Router>
  );
};

export default App;
