import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadWordBookFB } from './redux/modules/wordBook';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWordBookFB());
  });
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<AddPage />} path='/add' />
          <Route element={<DetailPage />} path='/detail/:index' />
        </Routes>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  background-color: rgb(226, 255, 248);
  padding: 0px 15px 20px;
  height: 40rem;
  width: 20rem;

  position: relative;

  overflow: auto;
`;
export default App;
