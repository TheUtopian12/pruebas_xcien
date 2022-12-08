import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";

import Aos from "aos";
import "aos/dist/aos.css";
const Landing = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col justify-center items-center  h-[100vh] bg-white dark:bg-black "
      >
        <div data-aos='fade-up'
        className="flex flex-col justify-center items-center bg-[#1e2029] w-[90%] h-[70vh] text-center pr-10 pl-10 text-white">
          <p className="text-8xl font-bold pb-8 ">XCIEN</p>
          <p className="text-4xl pb-8">
            Somos expertos en conectividad e integración de servicios y
            proyectos de TELECOMUNICACIONES para diferentes sectores
          </p>

          <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Creamos soluciones personalizadas para aumentar la eficiencia y
            productividad en tu empresa
          </p>

          <div className="mt-10 flex">
            <Button variant="outlined" color="success">
              <p className="text-white">Mas informacion</p>
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Landing;
