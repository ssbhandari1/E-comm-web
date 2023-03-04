import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Card';
import { CardsDetails } from './components/CardsDetails';
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<CardsDetails/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
