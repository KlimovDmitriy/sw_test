import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PayForm from './components/UserForms/PayForm';
import {Container} from 'react-bootstrap';

function App() {
  return (
      <>
        <Container>
          <Routes>
            <Route element={<Dashboard/>} path={'/dashboard'}/>
            <Route element={<PayForm/>} path={'/'}/>
          </Routes>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
