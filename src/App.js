import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadWordBookFB } from './redux/modules/wordBook';
import { Helmet } from 'react-helmet';
import Test from './Test';
import Spinner from './components/Spiner';
function App() {
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.wordBook.is_loaded);
  React.useEffect(() => {
    dispatch(loadWordBookFB());
  });

  return (
    <Wrapper>
      <Helmet>
        <title>나의단어장</title>
      </Helmet>
      <Container>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<AddPage />} path='/add' />
          <Route element={<EditPage />} path='/detail/:index' />
        </Routes>
      </Container>

      {!is_loaded && <Spinner />}
    </Wrapper>
    // <Test></Test>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99vh;
  width: 100vw;
`;
const Container = styled.div`
  background-color: #4382e6;
  padding: 0px 15px 20px;
  height: 40rem;
  width: 20rem;

  position: relative;

  overflow: auto;
  border: 1px solid black;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
`;
export default App;
