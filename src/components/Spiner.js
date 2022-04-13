import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return <Outter>로딩중</Outter>;
};
const Outter = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
`;
export default Spinner;
