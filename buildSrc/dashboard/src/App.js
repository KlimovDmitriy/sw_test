import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import {Container} from 'react-bootstrap';

function App() {
  return (
      <>
        <Container>
          <Dashboard/>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
