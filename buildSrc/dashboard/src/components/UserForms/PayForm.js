import {Button, Form} from 'react-bootstrap';

const PayForm = () => {
  return (
      <Form>
        <Form.Control type="text" name="price"
                      placeholder="Введите сумму оплаты"
                      className="mb-2"/>
        <Button type="submit">Оплатить</Button>
        <Button type="reset">Отмена</Button>
      </Form>
  )
}

export default PayForm