import React from 'react';
import { MdFullscreenExit } from 'react-icons/md';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Test = () => {
  // 리덕스가 가지고있는 전체데이터 가지고 오기
  // 전체데이터(state)=>return값이 state
  const my_lists = [
    {
      id: '1',
      word: '단어를 적어주세요',
      desc: '설명을 적어주세여',
      example: '예시다',
    },
    {
      id: '2',
      word: '단어를 적어주세요',
      desc: '설명을 적어주세여',
      example: '예시다',
    },
    {
      id: '3',
      word: '단어를 적어주세요',
      desc: '설명을 적어주세여',
      example: '예시다',
    },
  ];

  // my_lists.map((list, index, array) => {
  //   console.log(list, index, array);
  // });
  return (
    <div>
      <div>hihii</div>
      {my_lists.map((list, index) => {
        return <div>{list}</div>;
      })}
      <div>hi</div>
    </div>
  );
};

export default Test;
