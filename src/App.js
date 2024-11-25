import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa vistas de autenticación
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Importar vistas de usuario
import Feed from "./pages/User/Feed";
import Comments from "./pages/User/Comments";
import Challenges from "./pages/User/Challenges";

// Importar vistas compartidas
import Search from "./pages/Shared/Search";
import Notifications from "./pages/Shared/Notifications";
import UploadRecipe from "./pages/Shared/UploadRecipe";
import UserProfile from "./pages/Shared/UserProfile";

// Importar vistas de administrador
import AdminFeed from "./pages/Admin/AdminFeed";
import AdminComments from "./pages/Admin/AdminComments";
import AdminChallenges from "./pages/Admin/AdminChallenges";
import AdminCreateChallenges from "./pages/Admin/AdminCreateChallenges";
import AdminSendNotifications from "./pages/Admin/AdminSendNotifications";
import AdminManageUsers from "./pages/Admin/AdminManageUsers";
import AdminManageRecipes from "./pages/Admin/AdminManageRecipes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas de Usuario */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/uploadrecipe" element={<UploadRecipe />} />

        {/* Rutas de Perfil */}
        <Route path="/profile" element={<UserProfile />}>
          <Route path="my-recipes" element={<UserProfile section="Mis Recetas" />} />
          <Route
            path="saved-recipes"
            element={<UserProfile section="Mis Recetas Guardadas" />}
          />
          <Route path="settings" element={<UserProfile section="Ajustes" />} />
        </Route>

        {/* Rutas de Administrador */}
        <Route path="/admin/feed" element={<AdminFeed />} />
        <Route path="/admin/comments" element={<AdminComments />} />
        <Route path="/admin/challenges" element={<AdminChallenges />} />
        <Route
          path="/admin/createchallenges"
          element={<AdminCreateChallenges />}
        />
        <Route
          path="/admin/sendnotifications"
          element={<AdminSendNotifications />}
        />
        <Route path="/admin/manageusers" element={<AdminManageUsers />} />
        <Route path="/admin/managerecipes" element={<AdminManageRecipes />} />
      </Routes>
    </Router>
  );
};

export default App;
