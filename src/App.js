import './App.css';
import MainSection from './components/MainSection';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<MainSection />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
