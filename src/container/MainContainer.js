import React from 'react';
import Card from '../components/Card';
const MainContainer = ({ word, desc }) => {
  return (
    <>
      <h3>MY DICTIONNARY</h3>
      <Card word='word' desc='desc'></Card>
    </>
  );
};

export default MainContainer;
