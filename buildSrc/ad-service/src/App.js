import Footer from './components/Footer';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import contractorsService from './services/contractorService';
import adService from './services/adService';

function App() {
  // Используем простой useState, так как маленький проект для редьюсера
  const [contractor, setContractor] = useState({});
  const [callbackUrl, setCallbackUrl] = useState('');
  const [price, setPrice] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    contractorsService.getContractor().
        then(contractor => setContractor(contractor));
  }, []);

  const addCallback = (event) => {
    event.preventDefault();
    contractorsService.addContractorCallback(
        contractor.id, callbackUrl).then(resolve => {
      setNotification(`Вы изменили URL обработчика на ${callbackUrl}`);
      setCallbackUrl('');
      setTimeout(() => setNotification(''), 2000);
    });
  };

  const handleAdEvent = (type, additionalData = {}) => {
    adService.adEvent({
      type,
      additionalData,
      token: contractor.token
    }).then(resolve => {
      if (resolve.error) {
        console.error(resolve.error);
        setNotification(`Упс, при обработке события возникла ошибка`);
        setTimeout(() => setNotification(''), 2000);
      } else {
        setNotification(`Событие ${type} прошло успешно`);
        setTimeout(() => setNotification(''), 2000);
      }
    }).catch(error => {
      console.error(error);
      setNotification(`Упс, при обработке события возникла ошибка`);
      setTimeout(() => setNotification(''), 2000);
    })

  };

  return (
      <>
        <Container className="mt-5">
          {notification}
          <Row className="mb-3">
            <Col className="col-12">Ваш токен: <b>{contractor.token}</b>. Для
              корректной работы
              добавьте его на своем сервере</Col>
          </Row>
          <Row>
            <Form className="col-4" onSubmit={addCallback}>
              <Form.Group controlId="formCallback">
                <Form.Control type="text" placeholder="Добавьте URL для обработки событий"
                              name="callbackUrl" value={callbackUrl}
                              onChange={(event) => setCallbackUrl(
                                  event.target.value)}/>
                <Button variant="primary" type="submit">
                  Сохранить
                </Button>
              </Form.Group>
            </Form>
            <Form className="col-4" onSubmit={(e) => {
              e.preventDefault();
              handleAdEvent('install');
            }}>
              <div>
                <Button variant="primary" type="submit">
                  Установить
                </Button>
              </div>
              <Form.Text>
                Нажмите "Установить", чтобы сэмулировать событие установки
              </Form.Text>
            </Form>
            <Form className="col-4" onSubmit={(e) => {
              e.preventDefault();
              handleAdEvent('pay', {price});
            }}>
              <Form.Group controlId="formPayment">
                <Form.Control type="text" placeholder="Введите сумму оплаты"
                              name="price"
                              value={price} onChange={(event) => setPrice(
                    event.target.value)}/>
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
