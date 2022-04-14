import React, { useEffect } from 'react';
import Card from '../components/Card';
import CardBlock from '../components/CardBlock';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeWordBookFB } from '../redux/modules/wordBook';
import { useScroll } from '../customHooks/useScroll';

import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

const MainContainer = () => {
  const navigate = useNavigate();
  const myLists = useSelector((state) => state.wordBook.list);
  const dispatch = useDispatch();

  return (
    <div>
      {myLists.map((item, i) => (
        <Card key={i}>
          <FloatBtn
            onClick={(e) => {
              // dispatch(removeWordBook(parseInt(e.target.name)));

              dispatch(removeWordBookFB(item.id, parseInt(i)));
            }}
          >
            <FaRegTrashAlt />
          </FloatBtn>
          <FloatBtn
            edit='true'
            onClick={() => {
              navigate(`/detail/${i}`);
            }}
          >
            <FaRegEdit />
          </FloatBtn>
          <CardBlock title='단어' content={item.word} color='black' />
          <CardBlock title='설명' content={item.desc} color='black' />
          <CardBlock title='예시' content={item.example} color='skyblue' />
        </Card>
      ))}

      <Link to='add'>
        <Button length={myLists.length}>+</Button>
      </Link>
    </div>
  );
};

const FloatBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  border: none;
  position: absolute;

  background-color: rgba(255, 255, 255, 0);

  top: 0rem;
  right: ${(props) => (props.edit ? '0.5rem' : '2.5rem')};

  :hover {
    color: #ff54e2;
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
  ${(props) =>
    props.length < 3
      ? {
          position: 'absolute',
          bottom: '1rem',
          right: '0rem',
        }
      : {
          position: 'absolute',
          top: `${13.25 * props.length}rem`,
          right: '0rem',
        }};
`;

export default MainContainer;
