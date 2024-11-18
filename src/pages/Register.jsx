import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi"; // Iconos
import logo from "../assets/logo.png";
import googleLogo from "../assets/google-logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Validar correo
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.com$/;
    return regex.test(email);
  };

  // Validar contraseña
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
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

    if (!username.trim()) {
      setError("El nombre de usuario no puede estar vacío.");
      return;
    }

    if (username.length > 13) {
      setError("El nombre de usuario no debe superar los 13 caracteres.");
      return;
    }

    setError("");
    console.log("Formulario de registro enviado correctamente:", { email, password, username });
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

      <p className="mt-4 text-[20px] sm:text-[36px] text-black text-center">Crear Cuenta</p>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xs sm:max-w-sm space-y-4">
        {/* Campo de Correo */}
        <div className="relative">
          <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="email"
            placeholder="Elige un dirección de correo válida"
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
            placeholder="Contraseña de 8-12 Caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[56px] sm:h-[70px] pl-12 pr-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Campo de Nombre de Usuario */}
        <div className="relative">
          <HiOutlineUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Nombre de usuario de 13 Caracteres"
            value={username}
            onChange={(e) => {
              if (e.target.value.length <= 13) {
                setUsername(e.target.value);
              }
            }}
            className="w-full h-[56px] sm:h-[70px] pl-12 pr-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Mostrar Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Botón de Registro */}
        <button
          type="submit"
          className="w-full h-[56px] sm:h-[70px] text-black text-[18px] sm:text-[24px] bg-[#FFB74D] rounded-lg hover:bg-orange-500 transition-all"
        >
          Registrarse
        </button>
      </form>

      {/* Botones Adicionales */}
      <div className="mt-6 w-full max-w-xs sm:max-w-sm space-y-3">
        {/* Botón de Registro con Google */}
        <button
          className="w-full h-[56px] sm:h-[70px] bg-[#FFB74D] text-black text-[18px] sm:text-[24px] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all"
        >
          <img
            src={googleLogo}
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Registro con Google
        </button>

        {/* Enlace para volver al Login */}
        <button
          className="w-full h-[56px] sm:h-[70px] text-[#81C784] text-[18px] underline hover:text-green-600"
          onClick={() => (window.location.href = "/login")}
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </div>
    </div>
  );
};

export default Register;
