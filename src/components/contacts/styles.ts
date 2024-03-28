import styled, { keyframes } from 'styled-components';

// Define a animação de rotação
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const ContainerComponent = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    flex-direction: row;
  `

export const ContainerLinks = styled.div`
   width: 100%;
   
  img{
    width: 40%;
    display: flex;
    align-items: center; 
    flex-direction: row;
    transition: transform 0.3s ease; /* Adiciona uma transição suave */

    /* Aplica a animação de rotação apenas quando o mouse passa por cima da imagem */
    &:hover {
      animation: ${rotateAnimation} 1s linear infinite;
      transform: scale(1.1);
  }  
  `
