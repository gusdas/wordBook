import React from 'react';
import styled from 'styled-components';
const CardBlock = ({ title, content, color }) => {
  const UnderLine = styled.div`
    text-decoration: underline;
    font-size: 0.5rem;
  `;
  const Content = styled.div`
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 2rem;
    margin-bottom: 20px;
    color: ${color};
  `;
  return (
    <>
      <UnderLine>{title}</UnderLine>
      <Content>{content}</Content>
    </>
  );
};

export default CardBlock;
