import React, { useRef } from 'react';
import Card from '../components/Card';
import CardBlock from '../components/CardBlock';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeWordBook } from '../redux/modules/wordBook';
import { useScroll } from '../customHooks/useScroll';

const MainPage = () => {
  const navigate = useNavigate();
  const myLists = useSelector((state) => state.wordBook.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>MY DICTIONNARY</h3>
      {myLists.map((item, i) => (
        <Card key={i}>
          <CardBlock title='단어' content={item.word} color='black' />
          <CardBlock title='설명' content={item.desc} color='black' />
          <CardBlock title='예시' content={item.example} color='skyblue' />
          <button
            name={i}
            onClick={(e) => {
              dispatch(removeWordBook(parseInt(e.target.name)));
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              navigate(`/detail/${i}`);
            }}
          >
            수정하기
          </button>
        </Card>
      ))}

      <Link to='add'>
        <Button>+</Button>
      </Link>
    </div>
  );
};
const boxAnimation = keyframes`
from{
  bottom: 1rem;
  
}

to{
  bottom: 1rem;
  transform: translateY()
  }
`;
const Button = styled.button`
  width: 5rem;
  height: 5rem;

  background-color: rgb(97, 0, 255);
  color: white;
  font-weight: bold;
  font-size: 4.5rem;
  border-radius: 50px;

  cursor: pointer;

  border: none;
  position: absolute;

  bottom: 1rem;
  left: 15rem;

  animation: ${boxAnimation} 1s 1s infinite linear;
`;

export default MainPage;
