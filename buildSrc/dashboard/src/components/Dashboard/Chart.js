import {
  CartesianGrid,
  Legend, Line,
  LineChart, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {useSelector} from 'react-redux';

const Chart = ({ data, type }) => {

  return (
      <ResponsiveContainer width={'100%'} height={300}>
        <LineChart
            data={data[type]}
            margin={{
              top: 5,
              bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="count" stroke="#8884d8"
                activeDot={{r: 8}} name={type}/>
        </LineChart>
      </ResponsiveContainer>
  )
}

export default Chart