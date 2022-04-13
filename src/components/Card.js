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
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
`;
export default Card;
