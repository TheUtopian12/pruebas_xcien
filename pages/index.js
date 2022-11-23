import Banners from "../components/Banners";
import Landing from "../components/Landing";
import Nosotros from "../components/nosotros/Nosotros";
import PromoCel from "../components/PromoCel";
import Servicios from '../components/servicios/Servicios'
import Slides from "../components/Slides";
import Slides2 from "../components/Slides2";
import Ventajas from "../components/Ventajas";
export default function Home() {
  return (
    <>
    <Landing/>
    <Banners/>
    <Servicios/>
    <Ventajas/>
    <Nosotros/>
    <PromoCel/>
    <Slides/>
    <Slides2/>
    
    </>
    
  )
}
