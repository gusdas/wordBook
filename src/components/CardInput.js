import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CardInput = (props) => {
  const { title, handleChange, name, text } = props;

  const word = useRef(null);
  const handleClick = () => {
    console.log(word.current.value);
  };
  useEffect(() => {
    if (text !== undefined) {
      word.current.value = text;
    }
  }, [word]);
  return (
    <div>
      <UnderLine>{title}</UnderLine>
      <Content ref={word} name={name} onChange={handleChange} />

      <button onClick={handleClick}>Ref확인용</button>
    </div>
  );
};

const UnderLine = styled.div`
  text-decoration: underline;
  font-size: 0.5rem;
  margin-bottom: 10px;
`;

const Content = styled.input`
  font-size: 1.125rem;
  line-height: 2rem;
  width: 100%;
  margin-bottom: 5px;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1.5px solid;
  border-radius: 5px;
  outline: none;
`;
export default CardInput;
