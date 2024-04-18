import { Container, Row, Col } from "react-bootstrap";
import Masonry from "../../components/grid/Masonry.grid.tsx";
import { PageContainer, StyledCol } from "./styles";

const ActivitiesSection = () => {
  return (
    <PageContainer>
      <h2>Recursos e Atividades</h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="7">
            {/* Definindo um tamanho fixo para o Masonry */}
            <div style={{ width: "100%", height: "500px" }}>
              <Masonry />
            </div>
          </Col>

          <StyledCol xs lg="5">
            {/* Card para programas culturais */}
            <div className="activity-card">
              {/* <img src="programas-culturais.jpg" alt="Programas Culturais" /> */}
              <h3>Programas Culturais</h3>
              <p>
                Explore uma variedade de eventos e atividades culturais, como
                exposições, apresentações de teatro e shows musicais.
              </p>
            </div>

            {/* Card para práticas esportivas */}
            <div className="activity-card">
              {/* <img src="praticas-esportivas.jpg" alt="Práticas Esportivas" /> */}
              <h3>Práticas Esportivas</h3>
              <p>
                Participe de diversas atividades esportivas, incluindo aulas de
                yoga, futebol, basquete e muito mais.
              </p>
            </div>
          </StyledCol>
          </Row>

          <Row>
          <StyledCol xs lg="12">
            {/* Card para cursos de formação e qualificação */}
            <div className="activity-card">
              {/* <img src="cursos-formacao.jpg" alt="Cursos de Formação e Qualificação" /> */}
              <h3>Cursos de Formação e Qualificação</h3>
              <p>
                Aprimore suas habilidades e conhecimentos com uma variedade de
                cursos nas áreas de arte, música, tecnologia e empreendedorismo.
              </p>
            </div>

            {/* Card para serviços socioassistenciais */}
            <div className="activity-card">
              {/* <img src="servicos-socioassistenciais.jpg" alt="Serviços Socioassistenciais" /> */}
              <h3>Serviços Socioassistenciais</h3>
              <p>
                Receba apoio e assistência em diversas áreas, incluindo
                assistência social, psicológica e jurídica.
              </p>
            </div>
          </StyledCol>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default ActivitiesSection;
