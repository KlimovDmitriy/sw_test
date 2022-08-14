import Footer from './components/Footer';
import {Button, Container, Form, Row} from 'react-bootstrap';
import {useEffect} from 'react';
import contractorsService from './services/contractorService';

function App() {
  return (
      <>
        <Container>
          <Row className="align-items-center">
            <Form className="col-4" onSubmit={(event) => {
              event.preventDefault();
              const callbackUrl = event.target.callbackUrl.value;
              console.log(callbackUrl)
              contractorsService.addContractorCallback('62f93457ba5c0530533e0414', callbackUrl).then(resolve => console.log(resolve))
            }}>
              <Form.Group controlId="formCallback">
                <Form.Label>Добавьте URL для обработки событий</Form.Label>
                <Form.Control type="text" placeholder="Callback URL" name="callbackUrl"/>
                <Button variant="primary" type="submit">
                  Сохранить
                </Button>
              </Form.Group>
            </Form>
            <Form className="col-4">
              <Form.Text>
                Нажмите "Установить", чтобы сэмулировать событие установки
              </Form.Text>
              <Button variant="primary" type="submit">
                Установить
              </Button>
            </Form>
            <Form className="col-4">
              <Form.Group controlId="formPayment">
                <Form.Label>Введите сумму оплаты</Form.Label>
                <Form.Control type="text" placeholder="Введите сумму оплаты"/>
                <Button variant="primary" type="submit">
                  Оплатить
                </Button>
              </Form.Group>
            </Form>
          </Row>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
