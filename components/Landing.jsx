import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Landing = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button className="w-32 h-10 border-2 border-white" onClick={() => setTheme("light")}>
          Light
        </button>
      );
    } else {
      return (
        <button className="w-32 h-10 border-2 border-black" onClick={() => setTheme("dark")}>
          Dark
        </button>
      );
    }
  };
  return (
    <>
    <p className="text-center">Sidebar</p>
      <div className="fixed">{renderThemeChanger()}</div>
      <div className="flex flex-col justify-center items-center  h-[100vh] bg-white dark:bg-black ">
        <div className="flex flex-col justify-center items-center bg-[#1e2029] w-[90%] h-[70vh] text-center pr-10 pl-10 text-white">
          <p className="text-8xl font-bold pb-8 ">XCIEN</p>
          <p className="text-4xl pb-8">
            Somos expertos en conectividad e integración de servicios y
            proyectos de TELECOMUNICACIONES para diferentes sectores
          </p>

          <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Creamos soluciones personalizadas para aumentar la eficiencia y
            productividad en tu empresa
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
