import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import style from './index.module.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={style.root}>
          <p>Ошибка 404. Страница не найдена.</p>
          <Link to="/">На главную.</Link>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
