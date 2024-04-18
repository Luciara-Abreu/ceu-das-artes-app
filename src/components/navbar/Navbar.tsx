import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CustomNavbar, ContainerNavbar, ContainerTitle, ContainerLinks } from './styles';
import ButtonNav from '../button/ButtonNav';

function NavbarComponent() {
    return (
        <ContainerNavbar fixed="top">
            <CustomNavbar expand="lg" className="bg-body-tertiary">
                <Container className='container-bootstrap'>

                    <ContainerTitle>
                        <Navbar.Brand className='link' href="#home">CEU DAS ARTES</Navbar.Brand>
                        <p>FAZENDO ARTE COM GRAÇA</p>
                    </ContainerTitle>

                    <ContainerLinks>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <ButtonNav />  
                            </Nav>
                        </Navbar.Collapse>
                    </ContainerLinks>

                </Container>
            </CustomNavbar>
        </ContainerNavbar>
    );
}

export default NavbarComponent;




