import React, { Fragment, useState } from "react";
import Image from "next/image";
import arrow from "./icons/Arrow.png";
import internet from "./icons/internet.png";
import sdwan from "./icons/SDWAN.png";
import ip from "./icons/IP.png";
import ciber from "./icons/padlock.png";
import vpn from "./icons/VPN.png";
import bigdata from "./icons/big-data.png";
import Card from "./Card";


//Borroso fondo
const Servicios = () => {
  return (
    <div className='bg-white dark:bg-black'>
    
      <div className="sm:h-full md:h-full lg:h-full xl:h-full pt-28 2xl:h-[130vh] ">
        <div className="grid grid-cols-1 justify-center text-center">
          {" "}
          <h1 className="sm:text-5xl text-2xl font-bold text-[#2adc2f]">
            Servicios
          </h1>
          <h2 className="sm:text-xl text-lg sm:ml-20 sm:mr-20 ml-5 mr-5 pt-5 dark:text-white text-black">
            La combinación de diferentes tecnologías y nuestra experiencia nos
            permite construir una solución personalizada a las necesidades de tu
            negocio o empresa.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-9 w-full mt-20 md:mb-10 xl:pl-10 xl:pr-10 transition ease-in-out ">
          <div className={`flex justify-center 2xl:translate-x-38 3xl:translate-x-48`}>
            <Card
              titulo={"Internet"}
              imagen={internet}
              arrow={arrow}
              descripcion={
                <>
                  Soluciones de{" "}
                  <span className="font-bold">
                    conectividad confiables y seguras
                  </span>{" "}
                  para la base de la transformación de tu empresa
                </>
              }
              pagina={"/ServiciosInternet"}
            />
          </div>

          <div className="flex justify-center ">
            <Card
              titulo={"SDWAN"}
              imagen={sdwan}
              arrow={arrow}
              descripcion={
                <>
                  Nuestro servicio administrado hace que todos tus sitios
                  trabajen juntos hacia un objetivo común, ya que{" "}
                  <span className="font-bold">centraliza y simplifica </span>
                  tu red de manera más inteligente.
                </>
              }
              pagina={"/SDWAN"}
            />
          </div>

          <div className="flex justify-center 2xl:-translate-x-38 3xl:-translate-x-48">
            <Card
              titulo={"Telefonía IP"}
              imagen={ip}
              arrow={arrow}
              descripcion={
                <>
                  Conecte a empleados y clientes con nuestros{" "}
                  <span className="font-bold">
                    servicios de voz y colaboración
                  </span>{" "}
                  desde la oficina, de forma remota o móvil.
                </>
              }
              pagina={"/TelefoniaIp"}
            />
          </div>
          <div className="flex justify-center 2xl:translate-x-38 3xl:translate-x-48">
            <Card
              titulo={"CIBERSEGURIDAD"}
              imagen={ciber}
              arrow={arrow}
              descripcion={
                <>
                  <span className="font-bold">Seguridad administrada</span> 100%
                  en la nube. La instalación y la administración remota es más
                  simple.
                </>
              }
              pagina={"/Ciberseguridad"}
            />
          </div>
          <div className="flex justify-center ">
            <Card
              titulo={"VPN"}
              imagen={vpn}
              arrow={arrow}
              descripcion={
                <>
                  Permite a los usuarios autorizados{" "}
                  <span className="font-bold">
                    acceder de forma segura a la información
                  </span>{" "}
                  y los recursos de la red de tu empresa desde ubicaciones
                  remotas.
                </>
              }
              pagina={"/VPN"}
            />
          </div>
          <div className="flex justify-center 2xl:-translate-x-38 3xl:-translate-x-48">
            <Card
              titulo={"Data Center"}
              imagen={bigdata}
              arrow={arrow}
              descripcion={
                <>
                  Renta un espacio en uno de nuestros racks y{" "}
                  <span className="font-bold">
                    almacena de forma segura tu información.
                  </span>
                </>
              }
              pagina={"/DataCenter"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
