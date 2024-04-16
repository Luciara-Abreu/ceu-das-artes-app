import styled from "styled-components";
import {Row } from 'react-bootstrap'

export const ContainerRow = styled(Row)`
width: 100%;
height: 100vh;
justify-content: center;
`

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #111;
`;

export const WrapLogin = styled.div`
  width: 35%;
  height: 90vh;
  background-color: #333;
  border-radius: 10px;
  padding: 0 24px;
  margin: 0 0 0 8px;
  //para não gerar scrow na página
  overflow: hidden;

  @media screen and (max-width: 1008px) {
    width: 95%;
  }


  .text-criarConta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

  .txt1 {
    font-size: 14px;
    color: #adadad;
    line-height: 1;
    padding-right: 5px;
  }

  .txt2 {
    font-size: 14px;
    color: #6a7dfe;
    line-height: 1;
    text-decoration: none;
  }
`;

export const CriarConta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoginForm = styled.div`
  width: 100%;
  //padding-bottom: 1px;
`;

export const LoginFormTitle = styled.div`
  width: 100%;
  font-family: Nunito, sans-serif;
  overflow: hidden;
  margin: 10px 0px 20px 0px;

  img {
    width: 100%;
    height: 18vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra suave ao contêiner */
  }

  img:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .img.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  p {
    font-size: 20px;
    margin-bottom: 35px;
    color: azure;
    position: relative;
    z-index: 1;
  }
`;

export const DivLogo = styled.div`
  width: 100%;

`;

export const LogoForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px; 

  img {
    width: 40%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
`;

export const WrapInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 50px;

  .input {
    width: 100%;
    height: 40px;
    padding: 0 5px;
    font-size: 15px;
    color: #fff;
    line-height: 1;
    border: none;
    display: block;
    background: transparent;
  }
  .FocusInput {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    pointer-events: none;
    color: #adadad;
  }
  .FocusInput::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #6a7dfe;
    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);
  }
  .FocusInput::after {
    font-family: Nunito, sans-serif;
    font-size: 15px;
    color: #999999;
    line-height: 1;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input:focus {
    outline: 0;
  }
  .input:focus + .FocusInput::after {
    top: -15px;
  }
  .input:focus + .FocusInput::before {
    width: 100%;
  }
  .has-val + .FocusInput::after {
    top: -15px;
  }
  .has-val + .FocusInput::before {
    width: 100%;
  }
`;

export const ContainerLoginFormBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 0 0;

  .login-form-btn {
    width: 100%;
    height: 50px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);

    :hover {
      cursor: pointer;
    }
  }
`;

