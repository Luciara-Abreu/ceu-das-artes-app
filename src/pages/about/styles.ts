import styled from 'styled-components';
import { Figure, Accordion, Col} from 'react-bootstrap';


// Estilizando o container da página
export const PageContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    margin: 6%;
    font-size: 450%;
    background: transparent;
}
  
  }
`;

// Define um componente estilizado para a imagem
export const StyledImage = styled(Figure.Image)`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3); /* Adiciona uma sombra estilosa */
  border: none; /* Remove a borda da imagem */
`;

export const StyledAcordion = styled(Accordion)`
padding: 5px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); 
 border: none; /* Remove a borda da imagem */
`
export const StyledCol = styled(Col)`
height: 20vh;
margin-top: 50px;

`

// Estilizando as imagens
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;
