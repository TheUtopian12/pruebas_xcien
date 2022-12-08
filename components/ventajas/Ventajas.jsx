import React,{useEffect} from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
const informacion = [
  {
    id: 1,
    titulo: "Integramos servicios",
    descripcion:
    "Todos tus servicios de telecomunicaciones en un mismo lugar. Juntos podemos desarrollar e integrar las mejores soluciones que necesita tu empresa.",
    color: "#fcd000",
    flip:'flip-left'
  },
  {
    id: 2,
    titulo: "Servicios administrados",
    descripcion:
      "Simplifica la administración de tus servicios de telecomunicaciones a través de la migración a la nube, la transformación digital y las redes mejoradas. ¡Despreocúpate! Nosotros nos encargamos de tus servicios con personal especializado.",
    color: "#0ebeff",flip:'flip-up'
  },
  {
    id: 3,
    titulo: "Escalabilidad",
    descripcion:
      "Si tu empresa está en constante crecimiento e innovación, somos tu mejor aliado. Nos encargamos de crecer a tu ritmo para que tus servicios de telecomunicaciones se ajusten a los requerimientos de tu empresa.",
    color: "#47cf73",flip:'flip-up'
  },
  {
    id: 4,
    titulo: "SLA / Nivel de Servicio",
    descripcion:
      "Todos nuestros procesos y tecnología están diseñados para ofrecerte los más altos niveles de servicio y brindarte una disponibilidad de hasta 99.95% anual en tu servicio de internet.",
    color: "#ae63e4",flip:'flip-right'
  },
];

const Ventajas = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  return (
    <>
      {" "}
      <h1 className="sm:text-5xl text-2xl font-bold text-[#2adc2f] text-center mt-10">
        Ventajas
      </h1>
      <div className="h-[100vh] flex gap-16 justify-center items-center">
        {informacion.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            color={item.color}
            flip={item.flip}
          />
        ))}
      </div>
    </>
  );
};

export default Ventajas;
