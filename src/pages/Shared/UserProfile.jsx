import React, { useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineBookmark,
  HiOutlineTrash,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import profilePlaceholder from "../../assets/profile-placeholder.png"; // Foto de perfil por defecto
import recipePlaceholder from "../../assets/recipe-placeholder.jpg"; // Foto de receta por defecto
import logo from "../../assets/logo.png"; // Logo de la aplicación

const ProfilePage = () => {
  const navigate = useNavigate();
  const [lastView, setLastView] = useState("userFeed"); // Simula la última vista
  const [section, setSection] = useState("misRecetas"); // Sección activa
  const [username, setUsername] = useState("Jason II");
  const [newName, setNewName] = useState(""); // Cambio de nombre
  const [profilePic, setProfilePic] = useState(profilePlaceholder);
  const [likedRecipes, setLikedRecipes] = useState({});
  const [savedRecipesState, setSavedRecipesState] = useState({});

  const [userRecipes, setUserRecipes] = useState([
    { id: 1, image: recipePlaceholder, title: "Paella casera", description: "Un clásico de comfort food", tags: ["cocina casera", "fácil", "almuerzo"] },
  ]);

  const [savedRecipes, setSavedRecipes] = useState([
    { id: 2, image: recipePlaceholder, title: "Spaghetti casero", description: "El spaghetti de toda la vida 🍝", tags: ["almuerzo", "cocina italiana", "fácil"] },
  ]);

  const handleNameChange = () => {
    if (newName.trim()) {
      setUsername(newName.trim());
      setNewName("");
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleDelete = (id, isSaved) => {
    const updatedRecipes = isSaved
      ? savedRecipes.filter((recipe) => recipe.id !== id)
      : userRecipes.filter((recipe) => recipe.id !== id);

    isSaved ? setSavedRecipes(updatedRecipes) : setUserRecipes(updatedRecipes);
    alert("La receta fue eliminada.");
  };

  const toggleLike = (id) => {
    setLikedRecipes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleSave = (id) => {
    setSavedRecipesState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderRecipes = (recipes, isSaved) =>
    recipes.map((recipe) => (
      <div key={recipe.id} className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full md:w-[700px] lg:w-[700px] mx-auto">
        <img src={recipe.image} alt={recipe.title} className="w-full object-cover" />
        <div className="p-4">
          <h2 className="text-black text-lg font-bold">{recipe.title}</h2>
          <p className="text-gray-700 text-sm">{recipe.description}</p>
          <p className="text-gray-500 text-xs">Etiquetas: {recipe.tags.join(", ")}</p>
        </div>
        <div className="p-4 flex justify-between items-center border-t">
          <button
            className={`flex items-center space-x-2 ${likedRecipes[recipe.id] ? "text-red-500" : "text-gray-500"}`}
            onClick={() => toggleLike(recipe.id)}
          >
            <HiOutlineHeart className="text-lg" />
            <span className="text-sm">{likedRecipes[recipe.id] ? "Te gusta" : "Me gusta"}</span>
          </button>
          <button
            className="flex items-center space-x-2 text-gray-500"
            onClick={() =>
              lastView === "userFeed"
                ? navigate("/comments")
                : navigate("/admin/comments")
            }
          >
            <HiOutlineChat className="text-lg" />
            <span className="text-sm">Comentar</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${savedRecipesState[recipe.id] ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => toggleSave(recipe.id)}
          >
            <HiOutlineBookmark className="text-lg" />
            <span className="text-sm">{savedRecipesState[recipe.id] ? "Guardado" : "Guardar"}</span>
          </button>
          <button
            className="flex items-center space-x-2 text-gray-500"
            onClick={() => handleDelete(recipe.id, isSaved)}
          >
            <HiOutlineTrash className="text-lg" />
            <span className="text-sm">Eliminar</span>
          </button>
        </div>
      </div>
    ));

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 fixed top-0 w-full z-20 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold hidden md:block">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="hidden md:flex space-x-20">
            <HiOutlineHome
              className="text-black text-2xl cursor-pointer"
              onClick={() =>
                lastView === "userFeed"
                  ? navigate("/feed")
                  : navigate("/admin/feed")
              }
            />
            <HiOutlineSearch
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate("/search")}
            />
            <HiOutlineBell
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate("/notifications")}
            />
            <HiOutlineUser
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          </div>
        </div>
        {/* Diseño móvil */}
        <div className="flex md:hidden justify-between items-center w-full mt-4">
          <HiOutlineHome
            className="text-black text-2xl cursor-pointer"
            onClick={() =>
              lastView === "userFeed"
                ? navigate("/feed")
                : navigate("/admin/feed")
            }
          />
          <HiOutlineSearch
            className="text-black text-2xl cursor-pointer"
            onClick={() => navigate("/search")}
          />
          <HiOutlineBell
            className="text-black text-2xl cursor-pointer"
            onClick={() => navigate("/notifications")}
          />
          <HiOutlineUser
            className="text-black text-2xl cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-36 md:pt-28 px-4">
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto">
          {/* Barra lateral */}
          <div className="bg-[#F5F5DC] w-full md:w-1/4 p-4 flex flex-col items-center">
            <img src={profilePic} alt="Perfil" className="w-32 h-32 rounded-full mb-6 object-cover" />
            <h2 className="text-black text-lg font-bold">{username}</h2>
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setSection("misRecetas")}
                className={`w-full py-2 rounded-lg ${section === "misRecetas" ? "bg-green-500 text-white" : "bg-[#FFB74D] text-black"}`}
              >
                Mis Recetas
              </button>
              <button
                onClick={() => setSection("recetasGuardadas")}
                className={`w-full py-2 rounded-lg ${section === "recetasGuardadas" ? "bg-green-500 text-white" : "bg-[#FFB74D] text-black"}`}
              >
                Mis Recetas Guardadas
              </button>
              <button
                onClick={() => setSection("ajustes")}
                className={`w-full py-2 rounded-lg ${section === "ajustes" ? "bg-green-500 text-white" : "bg-[#FFB74D] text-black"}`}
              >
                Ajustes
              </button>
              <button className="w-full py-2 rounded-lg bg-red-500 text-white">Cerrar Sesión</button>
            </div>
          </div>

          {/* Sección principal */}
          <div className="w-full md:w-3/4 p-4">
            {section === "misRecetas" && (
              <>
                <h2 className="text-black text-2xl font-bold mb-4">Mis Recetas</h2>
                {renderRecipes(userRecipes, false)}
              </>
            )}
            {section === "recetasGuardadas" && (
              <>
                <h2 className="text-black text-2xl font-bold mb-4">Mis Recetas Guardadas</h2>
                {renderRecipes(savedRecipes, true)}
              </>
            )}
            {section === "ajustes" && (
              <>
                <h2 className="text-black text-2xl font-bold mb-4">Ajustes</h2>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-black font-bold mb-2">Cambiar Nombre</h3>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full border rounded-lg p-2"
                      placeholder="Nuevo Nombre"
                    />
                    <button
                      onClick={handleNameChange}
                      className="mt-2 bg-[#FFB74D] text-black px-4 py-2 rounded-lg w-full"
                    >
                      Guardar
                    </button>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-black font-bold mb-2">Cambiar Imagen de Perfil</h3>
                    <div className="flex items-center space-x-4">
                      <img src={profilePic} alt="Imagen actual" className="w-16 h-16 rounded-full object-cover" />
                      <input type="file" onChange={handleProfilePicChange} className="bg-[#FFB74D] text-black px-4 py-2 rounded-lg cursor-pointer" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSection("misRecetas")}
                  className="mt-6 bg-[#FFB74D] text-black px-4 py-2 rounded-lg w-full"
                >
                  Volver al perfil
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
