import {Container, FloatingLabel, Form} from 'react-bootstrap';
import Chart from './Chart'
import {useSelector} from 'react-redux';

const Dashboard = () => {
  let dashboardData = useSelector(state => state.dashboard.data)



  return (
      <Container>
        <FloatingLabel controlId="floatingSelect" label="*В РАБОТЕ* Выберите тип отображения" className="mb-2">
          <Form.Select>
            <option value="1">По дням</option>
            <option value="2">Суммарный</option>
          </Form.Select>
        </FloatingLabel>
        {dashboardData.map((item, index) => <Chart type={Object.keys(item)[0]} key={index} data={item}/>)}
      </Container>
  );
};

export default Dashboard;