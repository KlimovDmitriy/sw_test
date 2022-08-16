import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import {Container} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {initializeDashboard} from './reducers/dashboardReducer';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeDashboard());
  }, [dispatch])
  return (
      <>
        <Header />
        <Container>
          <Dashboard/>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
