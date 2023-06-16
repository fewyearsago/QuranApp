import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const ItemBlock = ({ surah }) => {
  console.log(surah);
  return (
    <div className={style.root}>
      <Container>
        <div className={style.rootInner}>
          <h1>﴾ سورة {surah.name} ﴿</h1>
          <p className={style.rootTitle}>
            Сура {surah.transliteration} / {surah.translation}
          </p>
          {surah.verses.map((e, i) => (
            <div className={style.rootSurah} key={i}>
              <li>
                {e.id}. {e.translation}
              </li>

              <li>{e.text}</li>
            </div>
          ))}
        </div>
        <Link to="/read">
          <button className={style.rootBtn}>К содержанию Корана</button>
        </Link>
      </Container>
    </div>
  );
};

export default ItemBlock;
