import React, { useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineBookmark,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import recipeImage from "../../assets/recipe-placeholder.jpg"; // Imagen de receta de ejemplo

const ManagePostsPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: recipeImage,
      title: "Bandeja paisa casera",
      author: "Ronnie",
      description: "Un guisado clásico de comfort food sin dificultad alguna :)",
      tags: ["cocina casera", "fácil", "almuerzo"],
      liked: false,
      saved: false,
    },
  ]);

  const toggleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const toggleSave = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const handleAction = (action, id) => {
    alert(`Acción "${action}" realizada en la publicación con ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 fixed top-0 w-full z-20 shadow-md">
        {/* Diseño móvil */}
        <div className="md:hidden flex flex-col items-center">
          <img src={logo} alt="Sazón Social Logo" className="w-12 h-12 mb-2" />
          <div className="flex justify-between w-full px-8">
            <HiOutlineHome
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate("/admin/feed")}
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
        {/* Diseño escritorio */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-20">
            <HiOutlineHome
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate("/admin/feed")}
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
      <main className="pt-36 px-4">
        <h2 className="text-black text-3xl font-bold mb-6 text-center">
          Pendiente de Revisión
        </h2>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full md:w-[700px] lg:w-[700px] mx-auto"
          >
            {/* Imagen */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover"
              style={{ height: "auto" }}
            />
            {/* Detalles */}
            <div className="p-4">
              <h2 className="text-black text-lg sm:text-xl font-bold">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">por: {post.author}</p>
              <p className="text-gray-700 text-sm mb-2">{post.description}</p>
              <p className="text-gray-500 text-xs">
                Etiquetas: {post.tags.join(", ")}
              </p>
            </div>
            {/* Íconos de interacción */}
            <div className="p-4 flex justify-between items-center border-t">
              <button
                className={`flex items-center space-x-2 ${
                  post.liked ? "text-red-500" : "text-gray-500"
                }`}
                onClick={() => toggleLike(post.id)}
              >
                <HiOutlineHeart className="text-lg" />
                <span className="text-sm">
                  {post.liked ? "Te gusta" : "Me gusta"}
                </span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500">
                <HiOutlineChat className="text-lg" />
                <span className="text-sm">Comentar</span>
              </button>
              <button
                className={`flex items-center space-x-2 ${
                  post.saved ? "text-orange-500" : "text-gray-500"
                }`}
                onClick={() => toggleSave(post.id)}
              >
                <HiOutlineBookmark className="text-lg" />
                <span className="text-sm">
                  {post.saved ? "Guardado" : "Guardar"}
                </span>
              </button>
            </div>
            {/* Botones de acción */}
            <div className="p-4 grid gap-2 border-t md:flex md:justify-between md:items-center">
              <button
                onClick={() => handleAction("Aceptar", post.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <HiOutlineCheck className="text-lg" />
                <span>Aceptar</span>
              </button>
              <button
                onClick={() => handleAction("Rechazar", post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <HiOutlineX className="text-lg" />
                <span>Rechazar</span>
              </button>
              <button
                onClick={() => handleAction("Destacar", post.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <HiOutlineStar className="text-lg" />
                <span>Destacar</span>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ManagePostsPage;
