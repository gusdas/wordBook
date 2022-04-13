import React, { useRef } from 'react';
import Card from '../components/Card';
import CardBlock from '../components/CardBlock';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeWordBookFB } from '../redux/modules/wordBook';
import { useScroll } from '../customHooks/useScroll';
import Header from '../components/Header';

import {
  AiFillDelete,
  AiOutlineDelete,
  AiFillEdit,
  AiOutlineEdit,
} from 'react-icons/ai';

const MainPage = () => {
  const navigate = useNavigate();
  const myLists = useSelector((state) => state.wordBook.list);
  const dispatch = useDispatch();

  return (
    <div>
      <Header>My Dictionary</Header>

      {myLists.map((item, i) => (
        <Card key={i}>
          <FloatDelBtn
            onClick={(e) => {
              // dispatch(removeWordBook(parseInt(e.target.name)));

              dispatch(removeWordBookFB(item.id, parseInt(i)));
            }}
          >
            <AiOutlineDelete />
          </FloatDelBtn>
          <FloatBtn
            onClick={() => {
              navigate(`/detail/${i}`);
            }}
          >
            <AiOutlineEdit />
          </FloatBtn>
          <CardBlock title='단어' content={item.word} color='black' />
          <CardBlock title='설명' content={item.desc} color='black' />
          <CardBlock title='예시' content={item.example} color='skyblue' />
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

  background-color: #ff54e2;
  color: white;
  font-weight: bold;
  font-size: 4.5rem;
  border-radius: 50px;

  cursor: pointer;

  border: none;
  position: sticky;

  bottom: 0rem;
  left: 15rem;

  animation: ${boxAnimation} 1s 1s infinite linear;
`;

const FloatBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  font-size: 1.25rem;
  cursor: pointer;
  margin: 5px;
  border: none;
  position: absolute;

  background-color: rgba(255, 255, 255, 0);

  top: 0rem;
  right: 0.5rem;

  :hover {
    color: #ff54e2;
  }
`;
const FloatDelBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  font-size: 1.25rem;
  cursor: pointer;
  margin: 5px;
  border: none;
  position: absolute;

  background-color: rgba(255, 255, 255, 0);

  top: 0rem;
  right: 2.5rem;

  :hover {
    color: #ff54e2;
  }
`;
export default MainPage;
