import React from 'react';
import styled from 'styled-components';
const Header = ({ children }) => {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
};
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  color: white;
  margin: 2rem;
  font-family: 'Gamja Flower', cursive;
`;
export default Header;
