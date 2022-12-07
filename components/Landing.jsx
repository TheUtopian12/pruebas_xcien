import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";

import { motion, AnimatePresence } from "framer-motion";
const Landing = () => {
 
  return (
    <>
      
      <motion.div 
      
      initial={{y:25, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.75}}
      className="flex flex-col justify-center items-center  h-[100vh] bg-white dark:bg-black ">
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
      </motion.div>
    </>
  );
};

export default Landing;
