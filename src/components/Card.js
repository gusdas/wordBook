import React from 'react';
import styled from 'styled-components';
import CardBlock from './CardBlock';
const Card = ({ word, desc }) => {
  const Background = styled.div`
    background-color: white;
    height: 300px;
    width: 400px;
    margin-bottom: 20px;
    padding: 10px;
  `;

  return (
    <>
      <Background>
        <CardBlock title='단어' content={word} color='black' />
        <CardBlock title='설명' content={desc} color='black' />
        <CardBlock
          title='예시'
          content='저 친구가 초콜릿을 줬어. ㅎ1ㅎ1'
          color='skyblue'
        />
      </Background>
    </>
  );
};

export default Card;
