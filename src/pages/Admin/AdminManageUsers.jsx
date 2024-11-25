import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import profilePlaceholder from "../../assets/profile-placeholder.png"; // Imagen de perfil predeterminada
import logo from "../../assets/logo.png"; // Logo de Sazón Social

const ManageUsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Estefania",
      email: "estefania@gmail.com",
      role: "Usuario",
      isSuspended: false,
    },
    {
      id: 2,
      name: "Juan",
      email: "juanhernan@outlook.com",
      role: "Usuario",
      isSuspended: false,
    },
    {
      id: 3,
      name: "Ronnie",
      email: "ronniespinoza@protonmail.com",
      role: "Usuario",
      isSuspended: false,
    },
    {
      id: 4,
      name: "Joshua",
      email: "joshuaking@gmail.com",
      role: "Usuario",
      isSuspended: false,
    },
  ]);

  const toggleSuspend = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isSuspended: !user.isSuspended } : user
      )
    );
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
      <main className="pt-36 px-4 md:pt-28">
        <h2 className="text-black text-3xl font-bold mb-6 text-center">
          Gestionar Usuarios
        </h2>
        <div className="grid grid-cols-1 gap-6 max-w-[800px] mx-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={profilePlaceholder}
                  alt="Imagen de perfil"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-black font-bold">Nombre: {user.name}</p>
                  <p className="text-gray-700">Correo Electrónico: {user.email}</p>
                  <p className="text-gray-700">Rol: {user.role}</p>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button
                  onClick={() => toggleSuspend(user.id)}
                  className={`w-full md:w-auto px-6 py-2 rounded-lg font-bold ${
                    user.isSuspended
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {user.isSuspended ? "Habilitar" : "Suspender"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageUsersPage;
