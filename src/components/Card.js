import React from 'react';
import styled from 'styled-components';
const Card = ({ children }) => {
  return (
    <div>
      <Background>{children}</Background>
    </div>
  );
};
const Background = styled.div`
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
`;
export default Card;
