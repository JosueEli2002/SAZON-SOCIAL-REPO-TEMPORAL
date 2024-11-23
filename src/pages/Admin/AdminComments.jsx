import React, { useState } from "react";
import { HiOutlineUserCircle, HiOutlineTrash, HiOutlineHome, HiOutlineSearch, HiOutlineBell, HiOutlineUser } from "react-icons/hi";
import logo from "../../assets/logo.png"; // Logo principal

const AdminComments = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "Juan", comment: "¡Excelente receta, gracias por compartir!" },
    { id: 2, user: "Estefanía", comment: "¿Qué ingredientes puedo sustituir?" },
    { id: 3, user: "Samuel", comment: "¡La hice ayer y salió espectacular!" },
  ]);
  const [newComment, setNewComment] = useState("");
  const maxChars = 100;

  // Función para eliminar un comentario
  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  // Función para añadir un comentario
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
      const newCommentObj = { id: newId, user: "Admin", comment: newComment.trim() };
      setComments([...comments, newCommentObj]);
      setNewComment(""); // Limpiar el campo de texto
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 flex items-center justify-between fixed top-0 w-full z-20 shadow-md">
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
          <div className="flex space-x-20">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-28 px-4">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-[750px] mx-auto">
          <h2 className="text-black text-2xl font-bold text-center mb-4">Comentarios</h2>

          {/* Lista de comentarios */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <HiOutlineUserCircle className="text-gray-700 text-3xl" />
                  <p className="text-black">
                    <span className="font-bold">{comment.user} comentó: </span>
                    {comment.comment}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <HiOutlineTrash className="text-xl" />
                </button>
              </div>
            ))}
          </div>

          {/* Campo para añadir comentarios */}
          <div className="mt-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value.slice(0, maxChars))}
              placeholder="Escribe tu comentario..."
              className="w-full border rounded-lg p-3 text-black"
              rows="3"
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

export default AdminComments;
