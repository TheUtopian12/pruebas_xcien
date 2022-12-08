import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Card = ({ titulo, descripcion, color,flip }) => {
    useEffect(() => {
        Aos.init({duration:2000});
      }, []);
  return (
    <div data-aos={flip} className="w-[400px] dark:bg-white h-[300px] bg-gray-700 text-white dark:text-black flex flex-col p-[40px]">
      <div>
        <h2>{titulo}</h2>
      </div>
      <div className={`w-[320px] h-[5px]  mt-[10px]`} style={{backgroundColor:`${color}`}}></div>

      <div>{descripcion}</div>
    </div>
  );
};

export default Card;
