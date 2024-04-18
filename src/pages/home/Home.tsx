import Masonry from "../../components/grid/Masonry.grid";
import NavbarComponent from "../../components/navbar/Navbar";
import ParalaxVertical from "../../components/paralax/ParalaxVertical";
import About from "../about/About";
import { BodyHome, ContainerHome } from "./styles";


function Home() {
  return (
    <ContainerHome>
      <NavbarComponent />
      <BodyHome id='home'>primeira parte do site</BodyHome>
      <BodyHome id='projeto'>segunda parte do site</BodyHome>
      <BodyHome id='sobre'><About /></BodyHome>
      <BodyHome id='info'>quarta parte do site</BodyHome>
      <BodyHome id='info2'><Masonry /></BodyHome>
      <BodyHome id='libary'><ParalaxVertical /></BodyHome> 
    </ContainerHome>
  )
}


 export default Home;

