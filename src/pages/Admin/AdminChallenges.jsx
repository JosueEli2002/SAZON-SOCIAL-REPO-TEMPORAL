import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineX,
  HiOutlineTrash,
} from "react-icons/hi"; // Importar todos los iconos necesarios
import asianChallengeBanner from "../../assets/cocina-asiatica.png"; // Banner del reto de cocina asiática
import christmasChallengeBanner from "../../assets/cocina-nadiveña.png"; // Banner del reto navideño
import { useNavigate } from "react-router-dom"; // Para redirigir a otras vistas
import logo from "../../assets/logo.png";

const ChallengesPage = () => {
  const navigate = useNavigate();
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      banner: asianChallengeBanner,
      title: "Reto Cocina Asiática",
      details: `
        "Explosión de Sabores Asiáticos"

        Demuestra tu creatividad y pasión por la cocina asiática. ¡Sorprende con tus mejores recetas inspiradas en la gastronomía de Asia!

        Reglas del reto:
        - La receta debe incluir al menos un ingrediente típico de la cocina asiática (e.g., salsa de soya, jengibre, curry, etc.).
        - El tiempo de preparación no debe exceder los 40 minutos.
        - La receta debe ser acompañada por al menos dos fotografías (una del platillo terminado y otra del proceso).
        - Indica claramente los pasos y los ingredientes utilizados.
        - Opcional: Muestra una pequeña historia o anécdota que te inspire a cocinar esta receta.

        Fecha límite: 31 de noviembre de 2024.
      `,
    },
    {
      id: 2,
      banner: christmasChallengeBanner,
      title: "Reto de Comidas Navideñas del Mundo",
      details: `
        "Sabores de Navidad: Tradiciones en tu Mesa"

        Celebra la magia de la Navidad con tus mejores recetas tradicionales. Comparte lo que hace especial esta temporada en tu hogar.

        Reglas del reto:
        - La receta debe ser típica de las fiestas navideñas en tu región (dulce o salada).
        - Incluye una breve descripción de por qué esta receta es especial para ti.
        - Acompaña la receta con al menos tres fotografías (el platillo terminado, los ingredientes, y el proceso).
        - El tiempo de preparación debe ser menor a 1 hora y 30 minutos.
        - Indica el número de porciones que rinde la receta.

        Fecha límite: 24 de diciembre de 2024.
      `,
    },
  ]);

  const handleDelete = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Roboto']">
      {/* Encabezado */}
      <header className="bg-[#FFB74D] p-4 fixed top-0 w-full z-20 shadow-md">
        {/* Diseño móvil */}
        <div className="md:hidden flex flex-col items-center">
          {/* Logotipo centrado */}
          <img src={logo} alt="Sazón Social Logo" className="w-12 h-12 mb-2" />
          {/* Íconos de navegación alineados horizontalmente */}
          <div className="flex justify-between w-full px-8">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
        {/* Diseño escritorio */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-black text-[24px] font-bold">Sazón Social</h1>
            <img src={logo} alt="Sazón Social Logo" className="w-16 h-16" />
          </div>
          <div className="flex space-x-4">
            <HiOutlineHome className="text-black text-2xl cursor-pointer" />
            <HiOutlineSearch className="text-black text-2xl cursor-pointer" />
            <HiOutlineBell className="text-black text-2xl cursor-pointer" />
            <HiOutlineUser className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-28 px-4">
        {/* Botón para crear retos */}
        <div className="text-center mb-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg shadow-lg">
            Crear Reto
          </button>
        </div>
        <h2 className="text-black text-3xl font-bold mb-6 text-center">
          Retos Activos
        </h2>
        <p className="text-black text-center mb-8">
          ¡Atrévete a participar! Comparte con gente de todo el mundo tus
          habilidades culinarias.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={challenge.banner}
                alt={challenge.title}
                className="w-full md:h-[200px] h-[105px] object-cover"
              />
              <div className="p-4 flex flex-col items-center space-y-2">
                <button
                  onClick={() => navigate("/uploadrecipe")}
                  className="bg-[#FFB74D] text-black px-6 py-2 rounded-lg"
                >
                  Participar
                </button>
                <button
                  onClick={() => setSelectedChallenge(challenge)}
                  className="bg-[#FFB74D] text-black px-6 py-2 rounded-lg"
                >
                  Ver Detalles
                </button>
                <button
                  onClick={() => handleDelete(challenge.id)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de detalles del reto */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative font-['Roboto']">
            <button
              onClick={() => setSelectedChallenge(null)}
              className="absolute top-4 right-4 text-gray-500 text-2xl"
            >
              <HiOutlineX />
            </button>
            <h3 className="text-black text-lg font-bold mb-4">
              {selectedChallenge.title}
            </h3>
            <pre className="text-black text-sm whitespace-pre-wrap">
              {selectedChallenge.details}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesPage;
