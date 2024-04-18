import Banner from "../../components/banner/Banner";
import NavbarComponent from "../../components/navbar/Navbar";
import ParalaxVertical from "../../components/paralax/ParalaxVertical";
import About from "../about/About";
import ActivitiesSection from "../activitiesSection/ActivitiesSection";
import { BodyHome, ContainerHome } from "./styles";


function Home() {
  return (
    <ContainerHome>
      <NavbarComponent />
      <BodyHome id='home'><Banner /></BodyHome>
      <BodyHome id='projeto'><ActivitiesSection /></BodyHome>
      <BodyHome id='sobre'><About /></BodyHome>
      <BodyHome id='info'>quarta parte do site</BodyHome>
      <BodyHome id='info2'>quinta parte do site</BodyHome>
      <BodyHome id='libary'><ParalaxVertical /></BodyHome> 
    </ContainerHome>
  )
}


 export default Home;

