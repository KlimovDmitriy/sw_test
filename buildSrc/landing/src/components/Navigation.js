import {Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="#">Эмуляция установки</Nav.Link>
            <Nav.Link href="#">Эмуляция оплаты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation