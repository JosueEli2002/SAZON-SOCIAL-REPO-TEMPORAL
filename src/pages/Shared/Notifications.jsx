import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; // Logo principal

const Notifications = () => {
  const navigate = useNavigate();
  const [lastView, setLastView] = useState("userFeed"); // Simulación de última vista: "userFeed" o "adminFeed"
  const [notifications] = useState([
    { id: 1, text: "Juan le dio me gusta a tu receta de: paella casera" },
    { id: 2, text: "Estefanía comentó tu receta de: paella casera" },
    { id: 3, text: "Juan comentó tu receta de: paella casera" },
    { id: 4, text: "Estefanía le dio me gusta a tu receta de: paella casera" },
  ]);

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
        {/* Diseño móvil */}
        <div className="md:hidden flex flex-col items-center w-full">
          <img src={logo} alt="Sazón Social Logo" className="w-16 h-16 mb-3" />
          <div className="flex justify-between w-full px-8 space-x-16">
            <HiOutlineHome
              className="text-black text-xl cursor-pointer"
              onClick={() =>
                lastView === "userFeed"
                  ? navigate("/feed")
                  : navigate("/admin/feed")
              }
            />
            <HiOutlineSearch
              className="text-black text-xl cursor-pointer"
              onClick={() => navigate("/search")}
            />
            <HiOutlineBell
              className="text-black text-xl cursor-pointer"
              onClick={() => navigate("/notifications")}
            />
            <HiOutlineUser
              className="text-black text-xl cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-36 md:pt-28 px-4">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-black text-2xl font-bold text-center mb-6">
            Notificaciones:
          </h2>
          {/* Lista de notificaciones */}
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center p-4 border rounded-lg shadow-sm bg-white"
              >
                <HiOutlineUserCircle className="text-gray-700 text-3xl mr-4 flex-shrink-0" />
                <p className="text-black break-words">{notification.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
