import { Card, Container } from 'react-bootstrap';
import Images from '../../utils/images';
import { ContainerBanner } from './styles';

const Banner = () => {
  return (
    <Card bg="primary" text="white">
      <div className="banner">
        <ContainerBanner src={Images.bannerceudasartes} />
      </div>
      <Card.Body>
        <Container>
          <Card.Title>Bem-vindo ao CEU das Artes</Card.Title>
          <Card.Text>
            Um espaço multifuncional projetado para ser um ponto de convergência cultural, esportiva e social em nossa comunidade.
          </Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Banner;
