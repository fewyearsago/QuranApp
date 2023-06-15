import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Date from '../components/Time';

const Read = () => {
  return (
    <div className="wrapper">
      <Header />
      <Date />
      <Content />
      <Footer />
    </div>
  );
};

export default Read;
