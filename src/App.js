import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';
function App() {
  return (
    <Routes>
      <Route element={<MainPage />} path='/' />
      <Route element={<AddPage />} path='/add' />
    </Routes>
  );
}

export default App;
