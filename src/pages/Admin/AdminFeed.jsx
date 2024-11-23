import React, { useEffect, useState } from "react";
import {
    HiOutlineHeart,
    HiOutlineChat,
    HiOutlineBookmark,
    HiOutlineHome,
    HiOutlineSearch,
    HiOutlineBell,
    HiOutlineUser,
} from "react-icons/hi";
import recipeImage from "../../assets/recipe-placeholder.jpg"; // Imagen de ejemplo de receta
import logo from "../../assets/logo.png"; // Logo principal

const FeedAdmin = () => {
    const [showButtons, setShowButtons] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [likedRecipes, setLikedRecipes] = useState({});

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setShowButtons(currentPosition <= scrollPosition);
        setScrollPosition(currentPosition);
    };

    const toggleLike = (id) => {
        setLikedRecipes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    const recipes = [
        {
            id: 1,
            image: recipeImage,
            title: "Estofado de ternera casero con verduras",
            author: "Juan",
            description: "Un guisado clásico de comfort food sin dificultad alguna :)",
            tags: ["cocina casera", "fácil", "almuerzo"],
        },
        {
            id: 2,
            image: recipeImage,
            title: "Spaghetti casero",
            author: "Estefanía",
            description: "El spaghetti de toda la vida 🍝 Etiquetas: almuerzo, cocina italiana.",
            tags: ["cocina italiana", "fácil", "almuerzo"],
        },
    ];

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

            {/* Botones adicionales */}
            <div
                className={`${showButtons ? "translate-y-0" : "-translate-y-full"} fixed top-32 md:top-24 left-0 right-0 z-10 bg-[#F5F5DC] p-4 transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-wrap justify-center gap-2 md:space-x-8">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        Publicar Recetas
                    </button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        Gestionar Usuarios
                    </button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        Enviar Notificaciones
                    </button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        Administrar y Crear Retos
                    </button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        Mod. Contenidos y Destacar Recetas
                    </button>
                </div>
            </div>

            {/* Contenido del feed */}
            <main className="pt-44 flex flex-col items-center">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-full md:w-[700px] lg:w-[700px] mx-auto"
                    >
                        {/* Imagen */}
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full object-cover"
                            style={{
                                height: "auto", // Mantener proporción automática
                            }}
                        />
                        {/* Detalles */}
                        <div className="p-4">
                            <h2 className="text-black text-lg sm:text-xl font-bold">{recipe.title}</h2>
                            <p className="text-gray-600 text-sm mb-2">por: {recipe.author}</p>
                            <p className="text-gray-700 text-sm mb-2">{recipe.description}</p>
                            <p className="text-gray-500 text-xs">
                                Etiquetas: {recipe.tags.join(", ")}
                            </p>
                        </div>
                        {/* Íconos de interacción */}
                        <div className="p-4 flex justify-between items-center border-t">
                            <button
                                className={`flex items-center space-x-2 ${likedRecipes[recipe.id] ? "text-red-500" : "text-gray-500"
                                    }`}
                                onClick={() => toggleLike(recipe.id)}
                            >
                                <HiOutlineHeart className="text-lg" />
                                <span className="text-sm">{likedRecipes[recipe.id] ? "Te gusta" : "Me gusta"}</span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <HiOutlineChat className="text-gray-500 text-lg" />
                                <span className="text-gray-500 text-sm">Comentar</span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <HiOutlineBookmark className="text-gray-500 text-lg" />
                                <span className="text-gray-500 text-sm">Guardar</span>
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default FeedAdmin;
