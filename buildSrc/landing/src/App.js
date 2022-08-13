import Button from 'react-bootstrap/Button';
import {Container, Form, Nav, Navbar} from 'react-bootstrap';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
      <>
        <Navigation />
        <main className="my-5">
          <Container>
            <Form>
              <Form.Control type="text" name="price"
                            placeholder="Введите сумму оплаты"
                            className="mb-2"/>
              <Button type="submit">Оплатить</Button>
            </Form>
          </Container>
        </main>
        <Footer />
      </>
  );
}

export default App;
