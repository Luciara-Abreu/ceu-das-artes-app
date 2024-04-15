import * as S from './styles'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bobesponja from '../../assets/bobesponja.gif'
 import ceu from '../../assets/ceu.gif'
import { Col, Row } from 'react-bootstrap'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()
  const handleClick = () => {
    history('/criarConta')
  }

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }


  // const handleSendAuthenticationAdm = () => {
  //   const messageError = 'E-mail ou senha invalida, Entre com seus dados'
  //   try {
  //     getdataAdm()
  //     history('/Dashboard')
  //   } catch (error) {
  //     console.log(messageError)
  //     alert(messageError)
  //   }
  // }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    //console.log("submit");
  }

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
                  <input className={email !== '' ? 'has-val input' : 'input'} type="email" value={email} onChange={handleEmailInput} />
                  <span className="FocusInput" data-placeholder="Email"></span>
                </S.WrapInput>

                <S.WrapInput>
                  <input className={password !== '' ? 'has-val input' : 'input'} type="password" value={password} onChange={handlePasswordInput} />
                  <span className="FocusInput" data-placeholder="Password"></span>
                </S.WrapInput>
              </S.ContainerInput>

              <S.ContainerLoginFormBtn className="actions">
                <button className="login-form-btn" type="submit">
                  Login
                </button>
              </S.ContainerLoginFormBtn>
            </form>

            <S.CriarConta className="text-criarConta">
              <div className="txt1">Não possui conta?</div>
              <button onClick={handleClick} className="txt2">
                Criar Conta
              </button>
            </S.CriarConta>
          </S.LoginForm>
        </S.WrapLogin>
      </S.ContainerLogin>
           </Col>
       </Row>  

  )
}

export default Login
