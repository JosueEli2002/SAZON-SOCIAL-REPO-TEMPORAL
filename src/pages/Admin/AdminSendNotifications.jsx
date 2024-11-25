import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SendNotificationsPage = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotification({ ...notification, [name]: value });
  };

  const handleSubmit = () => {
    if (!notification.title || !notification.body) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }
    console.log("Notificación enviada:", notification);
    alert("Notificación enviada exitosamente a todos los usuarios.");
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 fixed top-0 w-full z-20 shadow-md">
        {/* Diseño móvil */}
        <div className="md:hidden flex flex-col items-center">
          {/* Logotipo centrado */}
          <img src={logo} alt="Sazón Social Logo" className="w-12 h-12 mb-2" />
          {/* Íconos de navegación */}
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
      <main className="pt-28 px-4">
        <h2 className="text-black text-3xl font-bold mb-6 text-center">
          Enviar notificaciones
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-[600px] mx-auto">
          {/* Título */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-black font-bold mb-2">
              Título:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              maxLength={100}
              placeholder="Título de la notificación"
              value={notification.title}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          {/* Cuerpo */}
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-black font-bold mb-2"
            >
              Cuerpo de la notificación:
            </label>
            <textarea
              id="body"
              name="body"
              maxLength={500}
              placeholder="Escribe el cuerpo de la notificación"
              value={notification.body}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 h-32"
            />
          </div>
          {/* Botón de envío */}
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-lg w-full"
          >
            Enviar a todos los usuarios
          </button>
        </div>
      </main>
    </div>
  );
};

export default SendNotificationsPage;
