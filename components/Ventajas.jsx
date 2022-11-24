import React, { useState } from "react";

const Ventajas = () => {
  const [imagen, setImage] = useState(1);

  return (
    
    <div>
      <h1 className="sm:text-5xl text-2xl font-bold text-[#2adc2f] text-center">
            Ventajas
          </h1>
      
       <div>
      <div className="flex h-[100vh] bg-white dark:bg-black justify-center items-center gap-2">
        <div className="w-[80%] flex justify-end">
          {imagen === 1 ? (
            <>
              <div className="translate-x-[600px] translate-y-[100px] text-white">
                <span className="text-3xl font-bold">
                  Integramos servicios{" "}
                </span>
                <p className="text-xl">
                  Todos tus servicios de telecomunicaciones en un mismo lugar.
                  Juntos podemos desarrollar e integrar las mejores soluciones
                  que necesita tu empresa.
                </p>
              </div>
              <img
                src="/img/ventajas/Back01.png"
                alt=""
                style={{ height: "600px" }}
              />
            </>
          ) : imagen === 2 ? (
            <>
              <div className="translate-x-[600px] translate-y-[100px] text-white">
                <span className="text-3xl font-bold">
                  Servicios administrados{" "}
                </span>
                <p className="text-xl">
                  Simplifica la administración de tus servicios de
                  telecomunicaciones a través de la migración a la nube, la
                  transformación digital y las redes mejoradas. ¡Despreocúpate!
                  Nosotros nos encargamos de tus servicios con personal
                  especializado.
                </p>
              </div>

              <img
                src="/img/ventajas/Back02.png"
                alt=""
                style={{ height: "600px" }}
              />
            </>
          ) : imagen === 3 ? (
            <>
              <div className="translate-x-[600px] translate-y-[100px] text-white">
                <span className="text-3xl font-bold">Escalabilidad </span>
                <p className="text-xl">
                  Si tu empresa está en constante crecimiento e innovación,
                  somos tu mejor aliado. Nos encargamos de crecer a tu ritmo
                  para que tus servicios de telecomunicaciones se ajusten a los
                  requerimientos de tu empresa.
                </p>
              </div>
              <img
                src="/img/ventajas/Back03.png"
                alt=""
                style={{ height: "600px" }}
              />
            </>
          ) : (
            <>
              <div className="translate-x-[600px] translate-y-[100px] text-white">
                <span className="text-3xl font-bold">
                  SLA / Nivel de Servicio{" "}
                </span>
                <p className="text-xl">
                  Todos nuestros procesos y tecnología están diseñados para
                  ofrecerte los más altos niveles de servicio y brindarte una
                  disponibilidad de hasta 99.95% anual en tu servicio de
                  internet.{" "}
                </p>
              </div>
              <img
                src="/img/ventajas/Back04.png"
                alt=""
                style={{ height: "600px" }}
              />
            </>
          )}
        </div>
        <div className="w-[20%] grid gap-3">
          <img
            src="/img/ventajas/Back01.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(1)}
          />
          <img
            src="/img/ventajas/Back02.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(2)}
          />
          <img
            src="/img/ventajas/Back03.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(3)}
          />
          <img
            src="/img/ventajas/Back04.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(4)}
          />
        </div>
      </div>
    </div></div>

   
  );
};

export default Ventajas;
