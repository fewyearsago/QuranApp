import React from 'react';
import MainImg from '../../../public/main.jpg';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
  return (
    <div className={style.root}>
      <Container className="custom-container">
        <div className={style.rootBox}>
          <div className={style.rootText}>
            <h1>
              "Тому, кто прочтет хотя бы одну букву из Корана, запишется одно доброе дело, а за
              каждое доброе дело воздастся десятикратно"
            </h1>
            <Link to="/read" className={style.rootLink} href="#">
              Читайте Коран сейчас
            </Link>
          </div>
          <div>
            <img src={MainImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
