import React from 'react';
import styled from 'styled-components';
const CardBlock = (props) => {
  const { title, content, color } = props;

  return (
    <div>
      <UnderLine>{title}</UnderLine>
      <Content style={{ color: color }}>{content}</Content>
    </div>
  );
};
const UnderLine = styled.div`
  text-decoration: underline;
  font-size: 0.5rem;
`;
const Content = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 20px;
`;
export default CardBlock;
