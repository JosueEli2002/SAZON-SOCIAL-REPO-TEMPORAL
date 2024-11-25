import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi"; // Íconos de navegación
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const CreateChallengePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    banner: null,
    title: "",
    description: "",
    rules: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, banner: imageUrl });
    }
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.rules || !formData.deadline) {
      alert("Por favor, completa todos los campos antes de publicar.");
      return;
    }
    console.log("Reto publicado:", formData);
    alert("El reto ha sido publicado exitosamente.");
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
          Crear Reto
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-[600px] mx-auto">
          {/* Subir Banner */}
          <div className="mb-4">
            {formData.banner ? (
              <img
                src={formData.banner}
                alt="Banner del Reto"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Sin banner seleccionado</span>
              </div>
            )}
            <label
              htmlFor="upload-banner"
              className="bg-[#FFB74D] text-black px-6 py-2 rounded-lg cursor-pointer inline-block mt-2 text-center"
            >
              Subir Banner
            </label>
            <input
              type="file"
              id="upload-banner"
              className="hidden"
              accept="image/*"
              onChange={handleBannerUpload}
            />
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            {/* Título */}
            <input
              type="text"
              name="title"
              maxLength={100}
              placeholder="Título"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
            />
            {/* Descripción */}
            <textarea
              name="description"
              maxLength={400}
              placeholder="Descripción"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 h-28"
            />
            {/* Reglas */}
            <textarea
              name="rules"
              maxLength={400}
              placeholder="Reglas del Reto"
              value={formData.rules}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 h-28"
            />
            {/* Fecha Límite */}
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Botón Publicar */}
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-lg mt-6 w-full"
          >
            Publicar Reto
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreateChallengePage;
