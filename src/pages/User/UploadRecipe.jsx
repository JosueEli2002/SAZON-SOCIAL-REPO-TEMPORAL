import React, { useState } from "react";
import {
    HiOutlineHome,
    HiOutlineSearch,
    HiOutlineBell,
    HiOutlineUser,
} from "react-icons/hi";
import logo from "../../assets/logo.png"; // Logo principal

const NewRecipe = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Genera una URL temporal para mostrar la imagen
        }
    };

    const handleSubmit = () => {
        if (!image || !title || !description) {
            alert("Por favor, completa todos los campos antes de publicar la receta.");
            return;
        }

        alert("¡Receta publicada con éxito!");
        // Aquí se enviaría la información al backend o se manejaría según lo necesario
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
            <main className="pt-32 md:pt-28 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[700px] lg:w-[700px]">
                    <h2 className="text-black text-2xl font-bold text-center mb-6">
                        Publicar Nueva Receta
                    </h2>
                    <div className="flex flex-col items-center">
                        <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                            {image ? (
                                <img
                                    src={image}
                                    alt="Receta"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                <button
                                    className="bg-[#FFB74D] text-black px-4 py-2 rounded-lg shadow"
                                    onClick={() => document.getElementById("fileInput").click()}
                                >
                                    Agregar Foto
                                </button>
                            )}
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Agregar Título"
                            className="w-full border rounded-lg p-3 text-black mb-4"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Agregar descripción, ingredientes, detalles, etc."
                            className="w-full border rounded-lg p-3 text-black mb-4"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow w-full"
                            onClick={handleSubmit}
                        >
                            Publicar Receta
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NewRecipe;
