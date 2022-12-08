import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Nosotros = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  return (
    <div className="flex flex-col justify-center text-center h-auto bg-white dark:bg-black">
       <p data-aos="zoom-in" className="pt-10  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
      Nosotros
    </p>

      <div className="flex">
        <div className="w-[50%]">
          <p data-aos="zoom-in-right" className="pt-60 mr-[100px] pl-[200px] text-center text-xl">
            Nuestra experiencia en telecomunicaciones y tecnología , desde hace
            23 años, nos ha posicionado como el primer proveedor inalámbrico
            para diferentes sectores. En este tiempo nos ha permitido crecer y
            contar con infraestructura propia en 10 estados de México, ubicados
            en las 3 principales regiones económicas del país y con presencia de
            servicios especializados a nivel nacional.
          </p>
        </div>

        <div data-aos="zoom-in-left" className="w-[50%] flex flex-col justify-center items-center">
          <div className="dark:bg-gray-300 bg-gray-800 w-[600px] h-[400px] translate-y-[150px]"></div>
          <img
            src="https://xcien.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBack-Nosotros.97ad2ddd.png&w=1920&q=75"
            alt=""
            style={{ width: "600px" }}
            className="z-10 -translate-y-[220px] -translate-x-[40px]"
          />
        </div>
      </div>

      <div className="flex ">
        <div data-aos="zoom-in-right" className="w-[50%] flex flex-col justify-center items-center">
          <div className="dark:bg-gray-300 bg-gray-800 w-[600px] h-[400px] translate-y-[150px]"></div>
          <img
            src="https://xcien.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBack-Nosotros.97ad2ddd.png&w=1920&q=75"
            alt=""
            style={{ width: "600px" }}
            className="z-10 -translate-y-[220px] translate-x-[40px]"
          />
        </div>
        <div className="w-[50%]">
          <p data-aos="zoom-in-left" className="pt-60 mr-[100px] pl-[200px] text-center text-xl">
            Nuestro objetivo es dar un servicio de calidad, acompañado de
            nuestro personal altamente capacitado, para lograr una conectividad
            más eficiente y rentable para PYMES, grandes empresas y Gobierno. Si
            buscas una solución de calidad e innovadora, XCIEN es tu opción más
            inteligente.
          </p>
        </div>
      </div>
      
      <p data-aos="zoom-in" className="-translate-y-[43px] z-20 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600">
      ¡Estamos listos para asesorarte!
    </p>
    </div>
  );
};

export default Nosotros;
