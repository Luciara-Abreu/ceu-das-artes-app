import styled from "styled-components";
import { Col} from 'react-bootstrap';


// Estilizando o container da página
export const PageContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2{
   font-size: 4rem;
   margin: 6%;
}
  
  }
`;

export const StyledCol = styled(Col)`
height: 20vh;
margin-top: 50px;

`