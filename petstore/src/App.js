import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Store from './pages/Store';

function App() {
  return (
    <Container>
      <NavbarComp></NavbarComp>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />}/>
          <Route path='success' element={<Success />}/>
          <Route path='cancel' element={<Cancel />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
