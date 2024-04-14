import { ComponentButton, NavEnd} from "./styles";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function ButtonNav() {
  return (
    <ComponentButton>
      <Button className='btn' variant="outline-primary">HOME</Button>{' '}
      <Button className='btn' variant="outline-warning">PROJETO</Button>{' '}
      <Button className='btn' variant="outline-info">SOBRE</Button>{' '}
      <Button className='btn' variant="outline-light">INFO</Button>{' '}
      <Button className='btn' variant="outline-success">INFO</Button>{' '}
      <Button className='btn' variant="outline-danger">BIBLIOTECA</Button>{' '}

      <NavEnd>
        <NavDropdown title="Login" id="basic-nav-dropdown">
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
    </ComponentButton>
  );
}

export default ButtonNav;


