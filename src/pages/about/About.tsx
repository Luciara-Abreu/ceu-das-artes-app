import { PageContainer, StyledAcordion, StyledImage, StyledCol } from "./styles";
import Images from "../../utils/images.ts";
import { Container, Figure, Row, Col, Accordion } from "react-bootstrap";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Masonry from "../../components/grid/Masonry.grid.tsx";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <PageContainer>
      <h1 data-aos="zoom-in">Sobre o CEU das Artes de Alvorada</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <Figure>
              <div data-aos="flip-right">
                <StyledImage
                  width={500}
                  height={280}
                  src={Images.ceudasartes}
                />
                <Figure.Caption>Onde estamos</Figure.Caption>
              </div>
            </Figure>
          </Col>

          <StyledCol xs lg="7">
              <StyledAcordion defaultActiveKey="0" data-aos="flip-left">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quem Somos</Accordion.Header>
                  <Accordion.Body>
                    O Centro de Artes e Esportes Unificados (CEU das Artes) de
                    Alvorada é um espaço multifuncional projetado para ser um
                    ponto de convergência cultural, esportiva e social em nossa
                    comunidade. Localizado na rua Santa Catarina, no bairro
                    Sumaré. O CEU das Artes foi concebido com o objetivo de
                    promover o desenvolvimento integral dos cidadãos, oferecendo
                    uma ampla gama de atividades e serviços que atendam às
                    necessidades variadas de nossa população.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Nossa Missão</Accordion.Header>
                  <Accordion.Body>
                    O Projeto CEU das Artes integra programas e ações culturais,
                    práticas esportivas e de lazer, formação e qualificação para
                    o mercado de trabalho, serviços socioassistenciais,
                    políticas de prevenção à violência e inclusão digital. Nossa
                    missão é proporcionar um ambiente inclusivo e acolhedor,
                    onde pessoas de todas as idades e origens possam se
                    encontrar, aprender, criar e se desenvolver. Com isso,
                    buscamos promover a cidadania e o bem-estar social em áreas
                    de alta vulnerabilidade social.
                  </Accordion.Body>
                </Accordion.Item>
              </StyledAcordion>
          </StyledCol>
        </Row>
      </Container>


      <Container>
        <Row className="justify-content-md-center">

          <Col xs lg="5">        
          <StyledAcordion defaultActiveKey="0" data-aos="flip-left">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nossa Visão</Accordion.Header>
            <Accordion.Body>
              Acreditamos que o acesso à cultura, ao esporte e à educação é
              fundamental para o crescimento individual e coletivo, e é por isso
              que investimos na criação deste espaço único em nossa cidade.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Por que e Para Quem?</Accordion.Header>
            <Accordion.Body>
              Além das instalações básicas, como cineteatro, biblioteca,
              telecentro, CRAS, salas de aula e de oficinas, o CEU das Artes
              também conta com equipamentos de ginástica e uma pista de skate,
              proporcionando opções de entretenimento e atividade física para
              todos os gostos e interesses. 
              </Accordion.Body>
              <Accordion.Body>
              Seja bem-vindo ao CEU das Artes de
              Alvorada, um lugar onde a arte, o esporte e a cultura se encontram
              para inspirar e enriquecer nossas vidas.
            </Accordion.Body>
          </Accordion.Item>
        </StyledAcordion>
          </Col>

          <Col xs lg="7">
          <Masonry />
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};
export default About;

/**
 * 
 * 
 * O Centro de Artes e Esportes Unificados (CEU das Artes) de Alvorada é um espaço multifuncional projetado para ser um ponto de convergência cultural, esportiva e social em nossa comunidade. Localizado na rua Santa Catarina, no bairro Sumaré, o CEU das Artes foi concebido com o objetivo de promover o desenvolvimento integral dos cidadãos, oferecendo uma ampla gama de atividades e serviços que atendam às necessidades variadas de nossa população.

Nosso CEU das Artes integra programas e ações culturais, práticas esportivas e de lazer, formação e qualificação para o mercado de trabalho, serviços socioassistenciais, políticas de prevenção à violência e inclusão digital. Com isso, buscamos promover a cidadania e o bem-estar social em áreas de alta vulnerabilidade social.

Nossa missão é proporcionar um ambiente inclusivo e acolhedor, onde pessoas de todas as idades e origens possam se encontrar, aprender, criar e se desenvolver. Acreditamos que o acesso à cultura, ao esporte e à educação é fundamental para o crescimento individual e coletivo, e é por isso que investimos na criação deste espaço único em nossa cidade.

Além das instalações básicas, como cineteatro, biblioteca, telecentro, CRAS, salas de aula e de oficinas, o CEU das Artes também conta com equipamentos de ginástica e uma pista de skate, proporcionando opções de entretenimento e atividade física para todos os gostos e interesses.

Estamos comprometidos em oferecer programas e atividades de alta qualidade, desenvolvidos com base nas necessidades e interesses da nossa comunidade. Convidamos você a se juntar a nós nesta jornada de aprendizado, crescimento e transformação.

Seja bem-vindo ao CEU das Artes de Alvorada, um lugar onde a arte, o esporte e a cultura se encontram para inspirar e enriquecer nossas vidas.
 */
