import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonsPage from '@pages/PokemonsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
