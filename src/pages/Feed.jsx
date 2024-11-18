import React from "react";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi"; // Iconos
import recipeImage from "../assets/recipe-placeholder.jpg"; // Imagen de ejemplo de receta
import logo from "../assets/logo.png"; // Logo principal

const Feed = () => {
  // Datos de ejemplo de las recetas
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
      description: "El spaghetti de toda la vida 🍝 Etiquetas: almuerzo, cocina italiana.",
      tags: ["cocina italiana", "fácil", "almuerzo"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 flex items-center justify-between fixed top-0 w-full z-10 shadow-md">
        {/* Diseño móvil */}
        <div className="flex flex-col items-center md:hidden w-full">
          <img src={logo} alt="Sazón Social Logo" className="w-16 h-16 mb-2" />
          <div className="flex justify-between w-full px-4">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
        {/* Diseño escritorio */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-36">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Contenido del feed */}
      <main className="pt-28 flex flex-col items-center">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className={`bg-white rounded-lg shadow-lg mb-6 overflow-hidden ${
              window.innerWidth < 768 ? "w-full" : "max-w-[750px]"
            }`}
            style={{
              height: window.innerWidth < 768 ? "auto" : "750px",
              width: window.innerWidth < 768 ? "100%" : "750px",
              margin: window.innerWidth < 768 ? "0" : "auto",
            }}
          >
            {/* Imagen */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full object-cover"
              style={{
                height: window.innerWidth < 768 ? "auto" : "500px",
              }}
            />
            {/* Detalles */}
            <div className="p-4">
              <h2 className="text-black text-lg sm:text-xl font-bold">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">por: {recipe.author}</p>
              <p className="text-gray-700 text-sm mb-2">{recipe.description}</p>
              <p className="text-gray-500 text-xs">
                Etiquetas: {recipe.tags.join(", ")}
              </p>
            </div>
            {/* Íconos de interacción */}
            <div className="p-4 flex justify-between items-center border-t">
              <button className="flex items-center space-x-2">
                <HiOutlineHeart className="text-gray-500 text-lg" />
                <span className="text-gray-500 text-sm">Me gusta</span>
              </button>
              <button className="flex items-center space-x-2">
                <HiOutlineChat className="text-gray-500 text-lg" />
                <span className="text-gray-500 text-sm">Comentar</span>
              </button>
              <button className="flex items-center space-x-2">
                <HiOutlineBookmark className="text-gray-500 text-lg" />
                <span className="text-gray-500 text-sm">Guardar</span>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Feed;
