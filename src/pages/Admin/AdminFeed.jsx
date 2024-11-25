import React, { useEffect, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import recipeImage from "../../assets/recipe-placeholder.jpg";
import logo from "../../assets/logo.png";

const FeedAdmin = () => {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [likedRecipes, setLikedRecipes] = useState({});
  const [savedRecipesState, setSavedRecipesState] = useState({});

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setShowButtons(currentPosition <= scrollPosition);
    setScrollPosition(currentPosition);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const recipes = [
    {
      id: 1,
      image: recipeImage,
      title: "Estofado de ternera casero con verduras",
      author: "Juan",
      description: "Un guisado clásico de comfort food sin dificultad alguna :)",
      tags: ["cocina casera", "fácil", "almuerzo"],
    },
    {
      id: 2,
      image: recipeImage,
      title: "Spaghetti casero",
      author: "Estefanía",
      description: "El spaghetti de toda la vida 🍝",
      tags: ["cocina italiana", "fácil", "almuerzo"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 flex items-center justify-between fixed top-0 w-full z-20 shadow-md">
        <div className="flex flex-col items-center md:hidden w-full">
          <img src={logo} alt="Sazón Social Logo" className="w-16 h-16 mb-2" />
          <div className="flex justify-between w-full px-4">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" onClick={() => navigate("/admin/feed")} />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" onClick={() => navigate("/search")} />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" onClick={() => navigate("/notifications")} />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" onClick={() => navigate("/profile")} />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-20">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" onClick={() => navigate("/admin/feed")} />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" onClick={() => navigate("/search")} />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" onClick={() => navigate("/notifications")} />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" onClick={() => navigate("/profile")} />
          </div>
        </div>
      </header>

      {/* Botones adicionales */}
      <div
        className={`${showButtons ? "translate-y-0" : "-translate-y-full"} fixed top-32 md:top-24 left-0 right-0 z-10 bg-[#F5F5DC] p-4 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-wrap justify-center gap-2 md:space-x-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg" onClick={() => navigate("/uploadrecipe")}>
            Publicar Recetas
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg" onClick={() => navigate("/admin/manageusers")}>
            Gestionar Usuarios
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/admin/sendnotifications")}
          >
            Enviar Notificaciones
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/admin/createchallenges")}
          >
            Administrar y Crear Retos
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/admin/managerecipes")}
          >
            Mod. Contenidos y Destacar Recetas
          </button>
        </div>
      </div>

      {/* Contenido del feed */}
      <main className="pt-44 flex flex-col items-center">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full md:w-[700px] lg:w-[700px] mx-auto"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-black text-lg sm:text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mb-2">por: {recipe.author}</p>
              <p className="text-gray-700 text-sm mb-2">{recipe.description}</p>
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
                onClick={() => navigate("/admin/comments")}
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
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FeedAdmin;
