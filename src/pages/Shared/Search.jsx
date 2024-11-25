import React, { useState } from "react";
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

const SearchPage = () => {
  const navigate = useNavigate();
  const [lastView, setLastView] = useState("userFeed"); // Simula la última vista
  const [likedRecipes, setLikedRecipes] = useState({});
  const [savedRecipes, setSavedRecipes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    timeOfMeal: [],
    difficulty: [],
    country: [],
  });
  const [customFilter, setCustomFilter] = useState("");
  const [results] = useState([
    {
      id: 1,
      image: recipeImage,
      title: "Spaghetti casero",
      author: "Estefanía",
      description: "El spaghetti de toda la vida 🍝",
      tags: ["cocina italiana", "fácil", "almuerzo"],
    },
    {
      id: 2,
      image: recipeImage,
      title: "Sopa de tortilla",
      author: "Juan",
      description: "Un clásico mexicano 🌮",
      tags: ["cocina mexicana", "fácil", "almuerzo"],
    },
  ]);

  const toggleLike = (id) => {
    setLikedRecipes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleSave = (id) => {
    setSavedRecipes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto'] relative">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 fixed top-0 w-full z-20 shadow-md">
        <div className="flex flex-col items-center md:hidden w-full">
          <img src={logo} alt="Sazón Social Logo" className="w-16 h-16 mb-2" />
          <div className="flex justify-between w-full px-4">
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
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-20">
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
      </header>

      {/* Contenido principal */}
      <main className="pt-32 px-4 md:pt-26">
        <div className="max-w-[750px] mx-auto">
          {/* Barra de búsqueda */}
          <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 mb-4">
            <div className="flex items-center w-full bg-white border rounded-lg p-3">
              <input
                type="text"
                placeholder="Buscar recetas..."
                className="flex-1 text-black"
              />
              <HiOutlineSearch className="text-black text-xl cursor-pointer" />
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg md:relative"
            >
              Filtrar búsqueda
            </button>
          </div>

          {/* Resultados */}
          <h2 className="text-black text-xl font-bold mb-4">
            Resultados de tu búsqueda:
          </h2>
          <div className="space-y-4">
            {results.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-black text-lg font-bold">{recipe.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    por: {recipe.author}
                  </p>
                  <p className="text-gray-700 text-sm">{recipe.description}</p>
                  <p className="text-gray-500 text-xs">
                    Etiquetas: {recipe.tags.join(", ")}
                  </p>
                </div>
                <div className="p-4 flex justify-between items-center border-t">
                  <button
                    className={`flex items-center space-x-2 ${
                      likedRecipes[recipe.id] ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={() => toggleLike(recipe.id)}
                  >
                    <HiOutlineHeart className="text-lg" />
                    <span className="text-sm">
                      {likedRecipes[recipe.id] ? "Te gusta" : "Me gusta"}
                    </span>
                  </button>
                  <button
                    className="flex items-center space-x-2"
                    onClick={() =>
                      lastView === "userFeed"
                        ? navigate("/comments")
                        : navigate("/admin/comments")
                    }
                  >
                    <HiOutlineChat className="text-gray-500 text-lg" />
                    <span className="text-sm">Comentar</span>
                  </button>
                  <button
                    className={`flex items-center space-x-2 ${
                      savedRecipes[recipe.id]
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => toggleSave(recipe.id)}
                  >
                    <HiOutlineBookmark className="text-lg" />
                    <span className="text-sm">
                      {savedRecipes[recipe.id] ? "Guardado" : "Guardar"}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Filtros */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] max-h-[80%] overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-black text-lg font-bold">Filtros de búsqueda</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-red-500 text-lg font-bold"
              >
                X
              </button>
            </div>
            <div className="my-4">
              {/* Tiempo de comida */}
              <h3 className="font-bold text-black mb-2">Tiempo de comida</h3>
              <div className="flex flex-wrap gap-2">
                {["Cena", "Desayuno", "Almuerzo", "Merienda"].map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleFilter("timeOfMeal", item)}
                    className={`px-4 py-2 rounded-lg border ${
                      filters.timeOfMeal.includes(item)
                        ? "bg-[#81C784] shadow-md"
                        : "bg-[#FFB74D]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Dificultad */}
              <h3 className="font-bold text-black mt-4 mb-2">Dificultad</h3>
              <div className="flex flex-wrap gap-2">
                {["Muy fácil", "Fácil", "Normal", "Difícil", "Muy difícil"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => toggleFilter("difficulty", item)}
                      className={`px-4 py-2 rounded-lg border ${
                        filters.difficulty.includes(item)
                          ? "bg-[#81C784] shadow-md"
                          : "bg-[#FFB74D]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              {/* País */}
              <h3 className="font-bold text-black mt-4 mb-2">País</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cocina mexicana",
                  "Cocina internacional",
                  "Cocina italiana",
                  "Cocina colombiana",
                  "Cocina argentina",
                  "Cocina salvadoreña",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleFilter("country", item)}
                    className={`px-4 py-2 rounded-lg border ${
                      filters.country.includes(item)
                        ? "bg-[#81C784] shadow-md"
                        : "bg-[#FFB74D]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Campo personalizado */}
              <h3 className="font-bold text-black mt-4 mb-2">
                Filtro personalizado
              </h3>
              <input
                type="text"
                value={customFilter}
                onChange={(e) => setCustomFilter(e.target.value)}
                className="w-full border rounded-lg p-2"
                placeholder="Ingresa tus propios filtros..."
              />

              {/* Botón Aplicar Filtros */}
              <button
                onClick={() => setShowFilters(false)}
                className="bg-green-500 text-white w-full mt-4 py-2 rounded-lg"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
