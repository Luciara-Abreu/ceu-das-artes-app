import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CustomNavbar, ContainerNavbar, ContainerTitle, ContainerLinks, NavEnd, ComponentButton } from './styles';

function NavbarComponent() {
    return (
        <ContainerNavbar>
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

                                <ComponentButton variant="outline-primary" href="/home">HOME</ComponentButton>{' '}
                                <ComponentButton variant="outline-info">PROJETO</ComponentButton>{' '}
                                <ComponentButton variant="outline-warning">INFO</ComponentButton>{' '}
                                <ComponentButton variant="outline-light">INFO</ComponentButton>{' '}
                                <ComponentButton variant="outline-success">INFO</ComponentButton>{' '}
                                <ComponentButton variant="outline-danger">BIBLIOTECA</ComponentButton>{' '}


                                <NavEnd>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavEnd>
                            </Nav>
                        </Navbar.Collapse>
                    </ContainerLinks>

                </Container>
            </CustomNavbar>
        </ContainerNavbar>
    );
}

export default NavbarComponent;




