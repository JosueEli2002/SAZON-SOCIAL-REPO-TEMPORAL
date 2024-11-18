import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"; // Iconos de correo y candado
import logo from "../assets/logo.png"; // Importa el logo principal
import googleLogo from "../assets/google-logo.png"; // Importa el logo de Google

const Login = () => {
  // Estados para los campos y errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validar correo
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.com$/; // Solo dominios .com
    return regex.test(email);
  };

  // Validar contraseña
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/; // Min 8, max 12, al menos 1 mayúscula, 1 minúscula y 1 número
    return regex.test(password);
  };

  // Manejo de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("El correo debe ser válido y terminar en '.com'.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener entre 8 y 12 caracteres, con al menos una mayúscula, una minúscula y un número."
      );
      return;
    }

    setError("");
    console.log("Formulario enviado correctamente:", { email, password });
    // Aquí iría el envío al backend
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5DC] px-4 sm:px-16 font-['Roboto']"
    >
      {/* Título y Logo */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <h1 className="text-[48px] sm:text-[96px] font-bold text-black text-center sm:text-left">
          Sazón Social
        </h1>
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 sm:w-40 sm:h-40 sm:relative sm:-translate-y-0 sm:translate-x-0 mt-4 sm:mt-0"
        />
      </div>

      <p className="mt-4 text-[20px] sm:text-[36px] text-black text-center">
        ¡Bienvenido de nuevo!
      </p>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xs sm:max-w-sm space-y-4">
        {/* Campo de Correo */}
        <div className="relative">
          <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[56px] sm:h-[70px] pl-12 pr-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="relative">
          <HiOutlineLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[56px] sm:h-[70px] pl-12 pr-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Mostrar Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Botón de Inicio de Sesión */}
        <button
          type="submit"
          className="w-full h-[56px] sm:h-[70px] text-black text-[18px] sm:text-[24px] bg-[#81C784] rounded-lg hover:bg-green-600 transition-all"
          onClick={() => (window.local.href ="/Feed")}
        >
          Iniciar Sesión
        </button>
      </form>

      {/* Botones Adicionales */}
      <div className="mt-6 w-full max-w-xs sm:max-w-sm space-y-3">
        <button
          className="w-full h-[56px] sm:h-[70px] text-black text-[18px] sm:text-[24px] bg-[#FFB74D] rounded-lg hover:bg-orange-500 transition-all"
          onClick={() => (window.location.href = "/register")}
        >
          Registrarse
        </button>
        <button
          className="w-full h-[56px] sm:h-[70px] bg-[#FFB74D] text-black text-[18px] sm:text-[24px] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all"
        >
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
          Iniciar con Google
        </button>
      </div>
    </div>
  );
};

export default Login;
