import { React, useState } from 'react';
import Card from '../components/Card';
import CardInput from '../components/CardInput';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createWordBook, addWordBookFB } from '../redux/modules/wordBook';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const AddPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      id: form.id + 1,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    // dispatch(createWordBook(form));
    dispatch(addWordBookFB(form));
  };
  return (
    <>
      <Header>단어 추가하기</Header>

      <Card>
        <CardInput
          title='단어'
          name='word'
          handleChange={handleChange}
        ></CardInput>
      </Card>

      <Card>
        <CardInput
          title='설명'
          name='desc'
          handleChange={handleChange}
        ></CardInput>
      </Card>
      <Card>
        <CardInput
          title='예시'
          name='example'
          handleChange={handleChange}
        ></CardInput>
      </Card>
      <Link to='/'>
        <Button onClick={handleClick}>추가하기</Button>
      </Link>
    </>
  );
};
const Button = styled.button`
  padding: 10px;
  width: 100%;

  text-align: center;
  background-color: #ff54e2;
  color: white;

  cursor: pointer;
  outline: none;
  border: none;
`;
export default AddPage;
