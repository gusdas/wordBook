import { React, useState, useRef } from 'react';
import Card from '../components/Card';
import CardInput from '../components/CardInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateWordBook, updateWordBookFB } from '../redux/modules/wordBook';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
const EditContainer = () => {
  const myLists = useSelector((state) => state.wordBook.list);

  const { index } = useParams();

  const { word, desc, example, id } = myLists[index];

  const [form, setForm] = useState({
    word: word,
    desc: desc,
    example: example,
    id: id,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    myLists[index] = {
      word: form.word,
      desc: form.desc,
      example: form.example,
      id: id,
    };

    // dispatch(updateWordBook(myLists));
    dispatch(updateWordBookFB(myLists, myLists[index]));
  };

  return (
    <>
      <Header>단어 수정하기</Header>
      <Card>
        <CardInput
          title='단어'
          name='word'
          handleChange={handleChange}
          text={word}
        ></CardInput>
      </Card>

      <Card>
        <CardInput
          title='설명'
          name='desc'
          handleChange={handleChange}
          text={desc}
        ></CardInput>
      </Card>
      <Card>
        <CardInput
          title='예시'
          name='example'
          handleChange={handleChange}
          text={example}
        ></CardInput>
      </Card>

      <Link to='/'>
        <Button onClick={handleClick}>수정하기</Button>
      </Link>
    </>
  );
};
const Button = styled.div`
  padding: 10px;

  text-align: center;
  background-color: #ff54e2;
  color: white;

  cursor: pointer;

  text-decoration: none;
`;
export default EditContainer;
