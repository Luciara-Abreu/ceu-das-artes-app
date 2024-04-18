import * as S from "./styles";
import { ChangeEvent, useState } from "react";

import bobesponja from "../../assets/bobesponja.gif";
import ceu from "../../assets/ceu.gif";
import { Col, Row } from "react-bootstrap";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //console.log("submit");
  };

  return (
    <Row>
      <Col xs={12}>
        <S.ContainerLogin>
          <S.WrapLogin>
            <S.LoginForm>
              <S.LoginFormTitle>
                <img src={ceu} alt="Gif Animado" />
              </S.LoginFormTitle>

              <S.DivLogo>
                <S.LogoForm>
                  <img src={bobesponja} alt="Gif Animado" />
                </S.LogoForm>
              </S.DivLogo>

              <form className="form" onSubmit={handleSubmit}>
                <S.ContainerInput>
                  <S.WrapInput>
                    <input
                      className={email !== "" ? "has-val input" : "input"}
                      type="email"
                      value={email}
                      onChange={handleEmailInput}
                    />
                    <span
                      className="FocusInput"
                      data-placeholder="Digite seu e-mail"
                    ></span>
                  </S.WrapInput>

                  <S.WrapInput>
                    <input
                      className={password !== "" ? "has-val input" : "input"}
                      type="password"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                    <span
                      className="FocusInput"
                      data-placeholder="Digite sua senha"
                    ></span>
                  </S.WrapInput>

                  <S.WrapInput>
                    <input
                      className={password !== "" ? "has-val input" : "input"}
                      type="password"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                    <span
                      className="FocusInput"
                      data-placeholder="Confirme sua senha"
                    ></span>
                  </S.WrapInput>

                </S.ContainerInput>

                <S.ContainerLoginFormBtn className="actions">
                  <button className="login-form-btn" type="submit">
                    Cadastrar
                  </button>
                </S.ContainerLoginFormBtn>
              </form>
            </S.LoginForm>
          </S.WrapLogin>
        </S.ContainerLogin>
      </Col>
    </Row>
  );
};
