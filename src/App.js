import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar vistas del usuario
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Feed from "./pages/User/Feed";
import Comments from "./pages/User/Comments";
import Notifications from "./pages/User/Notifications";
import UploadRecipe from "./pages/User/UploadRecipe"
import Search from "./pages/User/Search"

// Importar vistas del administrador
import AdminFeed from "./pages/Admin/AdminFeed";
import AdminComments from "./pages/Admin/AdminComments"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de Usuario */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path ="/uploadrecipe" element={<UploadRecipe/>}/>
        <Route path ="/search" element={<Search/>}/>

        {/* Rutas de Administrador */}
        <Route path="/admin/feed" element={<AdminFeed />} /> 
        <Route path="/admin/comments" element={<AdminComments />} />        
      </Routes>
    </Router>
  );
};

export default App;
