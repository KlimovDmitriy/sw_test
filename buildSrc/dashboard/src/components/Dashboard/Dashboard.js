import {
  CartesianGrid, Legend, Line,
  LineChart,
  ResponsiveContainer, Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {Container} from 'react-bootstrap';

const Dashboard = () => {
  const installData = [
    {
      date: '2022-01-01',
      install: 4
    },
    {
      date: '2022-01-02',
      install: 3
    },
    {
      date: '2022-01-03',
      install: 10
    },
    {
      date: '2022-01-04',
      install: 1
    },
  ];

  return (
      <Container>
        <ResponsiveContainer width={'50%'} height={300}>
          <LineChart
              data={installData}
              margin={{
                top: 5,
                bottom: 5,
              }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="install" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Container>
  )
}

export default Dashboard