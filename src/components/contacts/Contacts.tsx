import { ContainerComponent, ContainerLinks } from "./styles"
import whats from '../../assets/whatsapp.png';
import insta from '../../assets/instagram.png';
import youTube from '../../assets/youtube.png';
import face from '../../assets/facebook.png';


function handleImageClick(url: string) {
  window.open(url, "_blank"); // Abre o URL em uma nova aba
}

function Contacts() {
  return (
    <ContainerComponent>
      <ContainerLinks>
        <img src={whats} alt="Ícone do WhatsApp" onClick={() => handleImageClick("https://seu-link-do-whatsapp.com")} />
      </ContainerLinks>

      <ContainerLinks>
        <img src={insta} alt="Ícone do Instagram" onClick={() => handleImageClick("https://seu-link-do-instagram.com")} />
      </ContainerLinks>

      <ContainerLinks>
        <img src={youTube} alt="Ícone do YouTube" onClick={() => handleImageClick("https://seu-link-do-youtube.com")} />
      </ContainerLinks>

      <ContainerLinks>
        <img src={face} alt="Ícone do Facebook" onClick={() => handleImageClick("https://seu-link-do-facebook.com")} />
      </ContainerLinks>
    </ContainerComponent>
  )
}

export default Contacts;
