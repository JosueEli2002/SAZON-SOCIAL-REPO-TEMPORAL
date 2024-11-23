import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi";
import logo from "../../assets/logo.png"; // Logo principal

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "Juan", comment: "Te quedó excelente" },
    { id: 2, user: "Estefanía", comment: "Bastante bueno" },
    { id: 3, user: "Samuel", comment: "¿Qué condimentos me recomiendas?" },
    {
      id: 4,
      user: "Jason III",
      comment:
        "Gracias, me ha servido mucho la receta para compartir con mi familia y amigos. ¡Saludos!",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const maxChars = 100;

  const handleAddComment = () => {
    if (
      newComment.trim() &&
      !comments.some((comment) => comment.comment === newComment.trim())
    ) {
      setComments([
        ...comments,
        { id: comments.length + 1, user: "Tú", comment: newComment.trim() },
      ]);
      setNewComment(""); // Limpiar el campo de texto
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 flex items-center justify-between fixed top-0 w-full z-10 shadow-md">
        {/* Diseño PC */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-28">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
        {/* Diseño móvil */}
        <div className="md:hidden flex flex-col items-center w-full">
          <img src={logo} alt="Sazón Social Logo" className="w-16 h-16 mb-3" />
          <div className="flex justify-between w-full px-8 space-x-16">
            <HiOutlineHome className="text-black text-xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-xl cursor-pointer" />
            <HiOutlineBell className="text-black text-xl cursor-pointer" />
            <HiOutlineUser className="text-black text-xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-36 md:pt-28 px-4">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-[750px] mx-auto">
          <h2 className="text-black text-2xl font-bold text-center mb-4">
            Comentarios
          </h2>
          {/* Lista de comentarios */}
          <div className="space-y-6 max-h-[400px] overflow-y-auto">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start p-4 border rounded-lg shadow-sm"
              >
                <HiOutlineUserCircle className="text-gray-700 text-3xl mr-4 flex-shrink-0" />
                <p
                  className="text-black break-words"
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  <span className="font-bold">{comment.user} comentó: </span>
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Campo para añadir comentarios */}
          <div className="mt-6">
            <textarea
              value={newComment}
              onChange={(e) =>
                setNewComment(e.target.value.slice(0, maxChars))
              }
              placeholder="Escribe tu comentario..."
              aria-label="Escribe tu comentario"
              className="w-full border rounded-lg p-3 text-black"
              rows="3"
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 text-sm">
                {newComment.length}/{maxChars} caracteres
              </p>
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className={`px-4 py-2 rounded-lg shadow ${
                  newComment.trim()
                    ? "bg-[#FFB74D] text-black cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comments;
