import React from 'react';
import Card from '../components/Card';
const MainPage = ({word,desc}) => {
  return (
    <>
      <h3>MY DICTIONNARY</h3>
      <Card word='word' desc='desc'></Card>
    </>
  );
};

export default MainPage;
