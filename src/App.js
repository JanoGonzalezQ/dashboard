import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dahboard from './pages/dashboard';
import ListadoUsuarios from './pages/usuarios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dahboard/>}> </Route>
        <Route path='/usuarios' element={<ListadoUsuarios/>}> </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
